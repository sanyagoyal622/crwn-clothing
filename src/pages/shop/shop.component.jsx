import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component  {
  

  componentDidMount() {
    const {fetchCollectionsStartAsync}=this.props;
    fetchCollectionsStartAsync();
    
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
  
const mapStateToProps=createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching
});
const mapDispatchToProps=dispatch=>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

