import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './shop-item.styles.scss';

const ShopItem = ({ item, addItem, isAuthenticated, history }) => {
	const { productName, productPrice, productImage } = item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${productImage})`,
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>{productName}</span>
				<span className='price'>Rp. {productPrice}</span>
			</div>
			<CustomButton
				onClick={() =>
					isAuthenticated
						? addItem(item)
						: history.push('/signin')}
				inverted
			>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(ShopItem),
);
