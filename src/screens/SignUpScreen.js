import React,{useState, useContext} from 'react';
import { View,StyleSheet } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation,route}) => {
    const { state, signup } = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style={styles.container}>

           <Spacer>
           <Text h3> Sign Up for Tracker </Text>  
           </Spacer>
           <Input 
                label="Email" 
                value={email} 
                // onChangeText={(newEmail) => setEmail(newEmail) }
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            /> 
           <Input 
                secureTextEntry
                label="Password" 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
           <Spacer>
           <Button title="SignUp" onPress={() => signup({ email,password })}/>
           </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1,
        justifyContent:'center',
        marginBottom:200,
    }
});

export default SignUpScreen;