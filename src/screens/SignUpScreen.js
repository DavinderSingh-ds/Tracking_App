import React,{ useContext} from 'react';
import { View,StyleSheet ,TouchableOpacity } from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForms';

const SignUpScreen = ({ navigation,route}) => {
    const { state, signup } = useContext(AuthContext);
   

    console.log(state);

    return (
        <View style={styles.container}>

            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage= {state.errorMessage}
                submitButtonText="Sign Up"
                // onSubmit={( {email, password }) => signup({ email, password})}
                onSubmit={signup}
            />
           <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
               <Spacer>
                <Text style={styles.link}>Already have an Account? Sign in instead</Text>
               </Spacer>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1,
        justifyContent:'center',
        marginBottom:200,
    },   
    link: {
        color:'blue'
    }
});

export default SignUpScreen;