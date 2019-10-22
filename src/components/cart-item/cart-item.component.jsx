import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({
	item: { productImage, productPrice, productName, productQty },
}) => (
	<div className='cart-item'>
		<img src={productImage} alt='item' />
		<div className='item-details'>
			<span className='name'>{productName}</span>
			<span className='price'>
				{productQty} x Rp.{productPrice}
			</span>
		</div>
	</div>
);

export default CartItem;
