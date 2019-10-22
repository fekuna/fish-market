import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import authReducer from './auth/auth.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'auth' ],
	blacklist: [ 'auth' ]
};

const authPersistConfig = {
	key: 'auth',
	storage,
	blacklist: [ 'user' ],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	shop: shopReducer,
	auth: persistReducer(authPersistConfig, authReducer)
});

export default persistReducer(persistConfig, rootReducer);
