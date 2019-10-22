import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { userLogin } from '../../redux/auth/auth.actions';

import './sign-in.styles.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { username, password } = this.state;
		const userData = {
			username,
			password,
		};

		this.props.onLogin(userData);
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your username and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='username'
						type='username'
						handleChange={this.handleChange}
						value={this.state.username}
						label='username'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>
							{' '}
							Sign in{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onLogin: (userData) => dispatch(userLogin(userData)),
});

export default connect(null, mapDispatchToProps)(SignIn);
