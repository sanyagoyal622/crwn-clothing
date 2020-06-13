import ShopActionTypes from './shop.types';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
export const fetchCollectionsStart =()=> ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
    
});

export const fetchCollectionsSuccess =(collectionsMap)=> ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap    
});

export const fetchCollectionsFailure =(errorMessage)=> ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
    
});


//we are firing a number of events here..beacuse of redux thunk..
//this is basically asynchronous action creater
export const fetchCollectionsStartAsync =()=> {
 return dispatch=>{
    const collectionRef=firestore.collection('collections'); 
    //once we get collection ref will fire collection start 
dispatch(fetchCollectionsStart());

    //wheneeer collection ref updates..this going to update its snapshot too   
    collectionRef.get().then( snapshot=> {
      const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
      //once will get the data from firebase dispath success
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
 }   
    
};


