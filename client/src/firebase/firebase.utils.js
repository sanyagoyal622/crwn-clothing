import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAA6JxVue3ttW5KidFNqOvuoON6sUN3CWQ",
    authDomain: "crwn-db-4b9dd.firebaseapp.com",
    databaseURL: "https://crwn-db-4b9dd.firebaseio.com",
    projectId: "crwn-db-4b9dd",
    storageBucket: "crwn-db-4b9dd.appspot.com",
    messagingSenderId: "280305096483",
    appId: "1:280305096483:web:6d58e1b444a0218b2c5e96",
    measurementId: "G-MB7BF8GSYQ"

};

export const createUserProfileDocument=async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists) {
        const{displayName,email} =userAuth;
        const createdAt=new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch(error) {
            console.log('error in creating user',error.message);

        }


    }
    return userRef;

};
//making new collection named"collections" in our firebase 
export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=> {
    const collectionRef=firestore.collection(collectionKey);
console.log(collectionRef);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
        const newDocRef=collectionRef.doc();
        batch.set(newDocRef,obj);

    });
 return await batch.commit()
};
//getting snapshot in the form we want it to be
 export const convertCollectionsSnapshotToMap=(collections)=> {
        const transformedCollection=collections.docs.map(doc=>{
            const{title,items}=doc.data();
            return {
                //this encode uri converts the given argument in to the possible route name

                routeName:encodeURI(title.toLowerCase()),
                id:doc.id,
                title,
                items
            };
        });
        //giving keyname to the particular objects...like hats,jackets etc;
       return transformedCollection.reduce((accumulator,collection)=> {
           accumulator[collection.title.toLowerCase()]=collection;
           return accumulator;
       }, {});
};

firebase.initializeApp(config);

export const auth=firebase.auth();

export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;
