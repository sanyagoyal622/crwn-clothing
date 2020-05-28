import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';


const Header=({currentUser}) => (
    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        
        <div className='options'>
        <Link className ="option" to='/shop'>
        SHOP
        </Link>
        <Link className ="option" to='/signin'>
        CONTACT
        </Link>
        {
            currentUser ? (
                //if the user is signed in then only show sign out button
            <div className='option' onClick={()=>auth.signOut()}>
                SIGN OUT
                 </div>
             ) : (
            <Link className='option' to= '/signin'> SIGN IN</Link>
             )
        }
        </div>
    </div>
);

const mapStateToProps=state=> ({
    currentUser: state.users.currentUser
});

export default connect(mapStateToProps) (Header);