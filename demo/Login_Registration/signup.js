import React, { Component } from 'react';
import { Text,Button,View,TextInput,TouchableOpacity,KeyboardAvoidingView,StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import { ScrollView } from 'react-native-gesture-handler';


class signup extends React.Component{

    handlebutton = () =>{
        this.props.navigation.navigate('Login');
    }
    
    handlesignin = () =>{
        this.props.navigation.navigate('Login');
    }
     
    render(){
        return(
            <ScrollView>    
                <View style={style.container}>
                
                    <Text style = {style.header}> Sign Up </Text>
                    
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
                    
                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='lock'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    ref = {password => this.password = password}
                                    placeholder = "Enter Your Password"
                                    spellCheck = {false}
                                    password = {true}
                                    maxLength = {20}
                                    returnKeyType = { "next" }
                                    onSubmitEditing= { ()=> this.cnfpassword.focus()}
                        />

                    </View>

                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='lock'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    ref = {cnfpassword => this.cnfpassword = cnfpassword}
                                    placeholder = "Enter Password Again"
                                    spellCheck = {false}
                                    password = {true}
                                    maxLength = {20}
                                    returnKeyType = { "next" }
                                    onSubmitEditing={ ()=> this.email.focus()}
                        />

                    </View>

                    <View style={style.inputcontainer}>
                        
                        <MaterialCommunityIcons 
                            name='email'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    ref = {email => this.email = email}
                                    placeholder = "Enter Your Email"
                                    spellCheck = {false}
                                    keyboardType = {'email-address'}
                                    maxLength = {20}
                                    returnKeyType = { "next" }
                                    onSubmitEditing={ ()=> this.phone.focus()}
                        />

                    </View>

                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='mobile-phone'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    ref = {phone => this.phone = phone}
                                    placeholder = "Enter Your Mobile Number"
                                    spellCheck = {false}
                                    keyboardType = {'number-pad'}
                                    maxLength = {20}
                        />

                    </View>

                    <Button
                        title='Sign Up'
                        color='#077F43'
                        onPress={this.handlebutton}
                        style={style.button}
                    />

                    <TouchableOpacity onPress={this.handlesignin}
                        paddingTop='10'>
                        <Text style={style.signin}> Already Have a Account!Click Here</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        );
    }
}
export default signup;

const style = StyleSheet.create({
    container:{
        backgroundColor: '#fff',   
    },
    header:{
        flex : 1,
        fontSize: 30,
        fontStyle: 'italic',
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'center',
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
        paddingTop:10,
    },
    signin:{
        color: '#077F43',
        fontSize: 15,
        paddingTop: 15,
        fontStyle: 'italic',
    },
});
