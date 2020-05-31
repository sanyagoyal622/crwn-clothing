import React from 'react';
import CustomButton from '../custom-button/custom-buttom.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown=({cartItems,history,dispatch}  )=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {cartItems.length ?(
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
          ):(<span className='empty-message'>YOUR CART IS EMPTY</span>
          )}
    </div>
        <CustomButton onClick={()=>{
          history.push('/checkout');
          dispatch(toggleCartHidden());
          }}>
            CHECKOUT</CustomButton>
    </div>

);

const mapStateToProps = (state ) => ({
    cartItems:selectCartItems(state)
  });
  

export default withRouter(connect(mapStateToProps) (CartDropdown));