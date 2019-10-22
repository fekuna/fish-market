import axios from 'axios';

export const addItemToCart = (cartItems, cartItemToAdd) => {
	console.log(cartItemToAdd, 'tolooonggg');
	const { id } = cartItemToAdd;
	const userId = localStorage.getItem('userId');
	const dataToCart = {
		idProduct: id,
		qty: 1,
	};
	console.log(id, userId)
	// console.log('userId', localStorage.getItem('userId'));

	// console.log('Token', localStorage.getItem('jwtToken'));
	// const token = localStorage.getItem('jwtToken');

	// console.log('currentCart', cartItems)
	// console.log('cartItemToAdd', cartItemToAdd);
	// const existingCartItem = cartItems.find(
	// 	(cartItem) => cartItem.id === cartItemToAdd.id,
	// );
	// // console.log('Existing Item', existingCartItem)

	// if (existingCartItem) {
	// 	return cartItems.map(
	// 		(cartItem) =>
	// 			cartItem.id === cartItemToAdd.id
	// 				? { ...cartItem, quantity: cartItem.quantity + 1 }
	// 				: cartItem,
	// 	);
	// }

	// return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];

	axios
		.post(
			`http://127.0.0.1:8000/api/customer/${userId}/cart`,
			dataToCart,
		)
		.then((res) => {
			console.log(res, 'axiosss');
		})
		.catch((err) => {
			console.log(err);
		});
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id,
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== cartItemToRemove.id,
		);
	}

	return cartItems.map(
		(cartItem) =>
			cartItem.id === cartItemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem,
	);
};

export const cartItemsCount = (cartItems) => {
	return cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.productQty,
		0,
	);
};

export const cartItemsTotal = (cartItems) => {
	return cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity +
			cartItem.productQty * cartItem.productPrice,
		0,
	);
};
