import React, { Component } from 'react';
import { Text,Button,View,TextInput,TouchableOpacity,KeyboardAvoidingView,StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import ToggleSwitch from 'toggle-switch-react-native'
import Dash from 'react-native-dash';

 
class login extends React.Component{
    state = {
        userInfo: null,
        Toggle_sign_in_option: true,
        // isOnLargeToggleSwitch: false,
        // isOnBlueToggleSwitch: false,
    }

    handlesignup = () =>{
        this.props.navigation.navigate('Signup');
    }
    
    handlebutton = () =>{
        this.props.navigation.navigate('Intro')
    }

    onToggle(isOn){
        console.log('toggle signin option'+this.state.Toggle_sign_in_option);
    }

    //google signin pages
    _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
    };

    render(){
        return(
                
                <View style={style.container}>
                
                    <Text style = {style.header}> Welcome </Text>
                    
                    <Text style = { style.label}> User Name:</Text>

                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='user'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    placeholder = "Enter Your User Name"
                                    spellCheck = {false}
                                    maxLength = {20}
                                    returnKeyType = { "next" }
                                    onSubmitEditing={ ()=> this.password.focus()}
                        />

                    </View>
                    
                    <Text style = { style.label }>Password:</Text>

                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='lock'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    ref = {password => this.password = password}
                                    placeholder = "Enter Your Password"
                                    spellCheck = {false}
                                    maxLength = {20}
                        />

                    </View>

                    <Button
                        title='Sign In'
                        color='#077F43'
                        onPress={this.handlebutton}
                        style={style.button}
                    />

                    <TouchableOpacity onPress={this.handlesignup} padding='10'>
                        <Text style={style.signup}> Don't Have Account Yet! Click Here</Text>
                    </TouchableOpacity>

                    <Text style = {{ padding:10, fontWeight: '600'}}>or</Text>

                    <Dash style ={{ padding:10, width:'80%', height:3, }}/>

                    <View style={style.othersignin}>

                        <GoogleSigninButton
                            style={{ width: 48, height: 48 ,padding:10}}
                            size={GoogleSigninButton.Size.Icon}
                            color={GoogleSigninButton.Color.Dark}
                            disabled={this.state.isSigninInProgress} 
                        />

                        {/* <LoginButton style={{ padding:10 }}
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        console.log("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        console.log("login is cancelled.");
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            console.log(data.accessToken.toString())
                                        })
                                    }
                                }
                            }
                            onLogoutFinished={() => console.log("logout.")}
                        /> */}

                    </View>

                    <ToggleSwitch
                        label="Remember Me"
                        onColor = '#077F43'
                        isOn={this.state.Toggle_sign_in_option}
                        onToggle={Toggle_sign_in_option => {
                            this.setState({ Toggle_sign_in_option });
                            this.onToggle(Toggle_sign_in_option);
                        }}
                    />
                
                </View>
    
        );
    }
}
export default login;

const style = StyleSheet.create({
    container:{
        
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize: 30,
        fontStyle: 'italic',
        paddingBottom:10,
    },
    label:{
        paddingTop:10,
        paddingBottom:10,
    },
    inputcontainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#077F43',
        paddingBottom: 4,
    },
    input: {
        padding: 10,
    },
    button: {
        alignItems:'center',
        width:'25%',
        height:'5%',
        padding:20,
    },
    signup:{
        color: '#077F43',
        fontSize: 15,
        paddingTop: 15,
        fontStyle: 'italic',
    },
    othersignin:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    }
});
