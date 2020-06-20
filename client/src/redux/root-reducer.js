import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directorytReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
//we are telling redux that we want local storage
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
    //whitelist doesnot contain user because it is handelled by firebase
}
//this is an json object telling the persist about the required configs

const rootReducer= combineReducers ({
    user:userReducer,
    cart:cartReducer,
    directory:directorytReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer);