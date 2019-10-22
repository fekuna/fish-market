import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { cartItemsCount } from '../../redux/cart/cart.utils';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		{console.log(cartItems, 'coooegg')}
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{cartItemsCount(cartItems)}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
