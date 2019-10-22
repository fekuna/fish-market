import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
	data: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.GET_ITEMS:
			return {
				...state,
				data: action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;
