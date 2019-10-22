import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOut from './pages/checkout/checkout.component'

import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact component={HomePage} path='/' />
				<Route exact component={SignInAndSignUp} path='/signin' />
				<Route exact component={CheckOut} path='/checkout' />
			</Switch>
		</div>
	);
}

export default App;
