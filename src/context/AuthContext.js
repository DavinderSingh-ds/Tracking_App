import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_eror':
            return { ...state, errorMessage: action.payload }; 
        case 'signup':
            return { ...state, token: action.payload };    
        default:
            return state;
    }
};



const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            // await AsyncStorage.getItem('token');
            dispatch({ type: 'signup', payload: response.data.token });

            navigate('TrackList');

        } catch (err) {
            dispatch({ 
                type: 'add_eror', 
                payload: 'Something went wrong with signup'
            })
        }
    };
};
const signin = dispatch => {
    return ({ email, password }) => {

    };
};
const signout = dispatch => {
    return ({ email, password }) => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);