import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/shop-item.component';

import { getItems } from '../../redux/shop/shop.actions';
import { getCartItems } from '../../redux/cart/cart.actions';

import './homepage.styles.scss';

class HomePage extends Component {
	componentDidMount() {
		this.props.onGetItems()
		this.props.onGetCartItems()
	}

	render() {
		console.log('hellooo', this.props.shop);
		return (
			<div className='collection-page'>
				<h2 className='title'>Fish List</h2>
				<div className='items'>
					{this.props.shop.map((item, idx) => (
						<ShopItem key={idx} item={item} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	shop: state.shop.data,
});

const mapDispatchToProps = dispatch => ({
	onGetItems: () => dispatch(getItems()),
	onGetCartItems: () => dispatch(getCartItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
