import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Logo from '../../assets/fish_logo.png';

import { logoutUser } from '../../redux/auth/auth.actions';

import './header.styles.scss';

const Header = ({ hidden, isAuthenticated, onLogoutUser }) => (
	<div className='header'>
		{console.log(isAuthenticated)}
		<Link className='logo-container' to='/'>
			<img src={Logo} className='logo' />
			<div>Uweekan</div>
		</Link>
		<div className='options'>
			<Link className='option' to='/'>
				SHOP
			</Link>
			<Link className='option' to='/'>
				CONTACT
			</Link>
			{isAuthenticated ? (
				<div className='option' onClick={() => onLogoutUser()}>
					LOG OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}

			<CartIcon />
			{!hidden ? <CartDropdown /> : null}
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	hidden: state.cart.hidden,
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
	onLogoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
