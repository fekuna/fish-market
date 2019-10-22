import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

class SignInAndSignUp extends Component {
    componentWillReceiveProps(nextProps){
        console.log('hehe', nextProps.user.isAuthenticated);
        if(nextProps.user.isAuthenticated) {
            this.props.history.push('/')
        }
    }

	render() {
		return (
			<div className='sign-in-and-sign-up'>
				<SignIn />
				<SignUp />
			</div>
		);
	}
}

const mapStateToProps = state => ({
    user: state.auth
})

export default connect(mapStateToProps)(SignInAndSignUp);
