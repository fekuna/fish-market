import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import RadioButton from '../radio-button/radio-button.component';
import CustomButton from '../custom-button/custom-button.component';

import { registerUser } from '../../redux/auth/auth.actions';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
			DOB: '',
			address: '',
			sex: '',
			phone: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const newUser = {
			username: this.state.username,
			fullname: this.state.fullName,
			email: this.state.email,
			password: this.state.password,
			sex: this.state.sex,
		};

		const { password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		await this.props.onRegisterUser(newUser, this.props.history);
		this.setState({
			username: '',
			fullName: '',
			email: '',
			password: '',
			sex: '',
			confirmPassword: ''
		})
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const {
			username,
			email,
			password,
			confirmPassword,
			fullName,
		} = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have a account</h2>
				<span>Sign up with your email and password</span>
				<form
					className='sign-up-form'
					onSubmit={this.handleSubmit}
				>
					<FormInput
						type='text'
						name='username'
						value={username}
						onChange={this.handleChange}
						label='Username'
						required
					/>
					<FormInput
						type='text'
						name='fullName'
						value={fullName}
						onChange={this.handleChange}
						label='Full Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<div className='radio-container'>
						<RadioButton
							label='Male'
							name='sex'
							value={0}
							onChange={this.handleChange}
						/>
						<RadioButton
							label='Female'
							name='sex'
							value={1}
							onChange={this.handleChange}
						/>
					</div>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onRegisterUser: (data, history) =>
		dispatch(registerUser(data, history)),
});

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
