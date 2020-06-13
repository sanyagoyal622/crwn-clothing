import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {updateCollection} from '../../redux/shop/shop.action';
import CollectionPage from '../collection/collection.component';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
class ShopPage extends React.Component  {
  unsuscribeFromSnapshot=null;

  componentDidMount() {
    const {updateCollection}=this.props;
    const collectionRef=firestore.collection('collections');
    //wheneeer collection ref updates..this going to update its snapshot too
    collectionRef.onSnapshot(async snapshot=> {
      const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
    updateCollection(collectionsMap);
    });
  }

  
  render() {
    const{match}=this.props;
    return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
    );
}
}
  
const mapDispatchToProps= dispatch => ({
  updateCollection:collectionsMap=>dispatch(updateCollection(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);

