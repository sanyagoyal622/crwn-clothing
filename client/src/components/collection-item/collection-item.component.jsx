import React from 'react';
 import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-buttom.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
 const CollectionItem=({addItem,item})=> {
     const {name,imageUrl,price}=item;
     return (
     <div className='collection-item' >
         <div className='image' style={{
             backgroundImage: `url(${imageUrl})`
         }}/>
         <div className='collection-footer'>
             <span className='name'>{name}</span>
             <span className='price'>{price}</span>
         </div>
         <CustomButton onClick={()=>addItem(item)} inverted>
             add to car
             t</CustomButton>
        

     </div>
     )

 
        }

 const mapDispatchToProps=dispatch=> ({
     addItem:item=>dispatch(addItem(item))
 })



 export default connect(null,mapDispatchToProps)(CollectionItem);