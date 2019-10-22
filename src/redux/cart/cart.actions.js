import axios from 'axios';
import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const getCartItems = () => (dispatch) => {
	const userId = localStorage.getItem('userId');
	return axios
		.get(`http://127.0.0.1:8000/api/customer/${userId}/cart`)
		.then((res) => {
			// console.log(res.data.data, 'aaweeee');
			dispatch({
				type: CartActionTypes.GET_CART_ITEMS,
				payload: res.data.data,
			});
			return res.data.data
		})
		.catch((err) => {
			console.log(err);
		});
};

export const addItem = (item) => (dispatch) => {
	console.log('addItem', item);
	const { id } = item;
	const userId = localStorage.getItem('userId');
	const token = localStorage.getItem('jwtToken');
	const dataToCart = {
		idProduct: id,
		qty: 1,
	};
	const dataToReducer = {
		...item,
		productQty: 1
	}
	console.log('uwoooo', dataToReducer)

	axios
		.post(
			`http://127.0.0.1:8000/api/customer/${userId}/cart`,
			dataToCart,
			{
				headers: {
					Authorization: token,
				},
			},
		)
		.then((res) => {
			dispatch({
				type: CartActionTypes.ADD_ITEM,
				payload: dataToReducer,
			});
		})
		.catch((err) => {
			console.log(err);
		});

	// return {
	// 	type: CartActionTypes.ADD_ITEM,
	// 	payload: item,
	// };
};

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const clearAllItemsFromCart = () => ({
	type: CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART,
});
