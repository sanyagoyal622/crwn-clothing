import React from 'react';

import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
 

import CartIcon from '../cart-icon/cart-icon.component';
import {HeaderContainer,OptionsContainer,LogoConatiner,OptionDiv,OptionLink} from './header.styles';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
const Header=({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoConatiner to='/'>
            <Logo className="logo"/>
        </LogoConatiner>
        
        <OptionsContainer>
       <OptionLink to ='/shop'> SHOP</OptionLink>
       <OptionLink to ='/shop'> CONTACT</OptionLink>
       
       
       
        {
            currentUser ? (
                //if the user is signed in then only show sign out button
            <OptionDiv  onClick={()=>auth.signOut()}>
                SIGN OUT
                </OptionDiv>
             ) : (
            <OptionLink  to= '/signin'> SIGN IN</OptionLink>
             )
        }

        <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
        
   
);

const mapStateToProps=(state)=> ({
    currentUser:selectCurrentUser(state),

    hidden:selectCartHidden(state)
});

export default connect(mapStateToProps) (Header);