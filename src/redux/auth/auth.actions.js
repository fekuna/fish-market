import axios from 'axios';
import { setAuthToken } from './auth.utils';
import { clearAllItemsFromCart } from '../cart/cart.actions'

import AuthTypes from './auth.types';

// import jwtDecode from 'jwt-decode';

// Register User
export const registerUser = (data, history) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/customer/register', data)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};

// Login User
export const userLogin = (userData) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/customer/login', userData)
		.then((res) => {
			console.log('asdasd',res.data.data.id);
			// Save to localStorage
			const { token, data } = res.data;
			// Set Token to LocalStorage
			localStorage.setItem('jwtToken', token);
			// Set User id to LocalStorage
			localStorage.setItem('userId', res.data.data.id)
			// Set Token to Auth Header
			setAuthToken(token);
			dispatch(setCurrentUser(data));
		});
};

// Log user out
export const logoutUser = () => (dispatch) => {
	// Remove Token from localStorage
	localStorage.removeItem('jwtToken');
	// Remove userId from localStorage
	localStorage.removeItem('userId')
	// Remove auth header for future request
	setAuthToken(false);
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
	dispatch(clearAllItemsFromCart())
};

// Set Logged In user
export const setCurrentUser = (data) => {
	return { type: AuthTypes.SET_CURRENT_USER, payload: data };
};
