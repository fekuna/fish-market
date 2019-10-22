import AuthTypes from './auth.types';

const initialState = {
	isAuthenticated: false,
	user: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AuthTypes.SET_CURRENT_USER:
			return {
                ...state,
                isAuthenticated: action.payload.id !== undefined,
                user: action.payload
			};
		default:
			return state;
	}
};

export default authReducer;
