import React, {Component} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime , saveEvent} from './api';
import {View, Button, TextInput, StyleSheet, AsyncStorage} from 'react-native';


const style= StyleSheet.create({
    fieldcontainer: {
        margin: 20,
        backgroundColor: '#fff'
    },
    text: {
        margin: 2,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        height: 40,
    },
    button: {
        height: 50,
        padding: 30,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        margin: 10,
        borderRadius:5  
    },
});


class Eventform extends Component{
    state={
        title: null,
        date: '',
    };
    
    isDateTimePickerVisible= true;

    handlechangetext = (value) =>{
        this.setState({title: value});
    }

    handleDatePicked = (date) =>{
        this.setState({ date });
        this._hideDateTimePicker();
    }

    _storedata =() =>{
        // saveEvent(this.state.title,this.state.date)
        this.props.navigation.navigate('Main');
    }

    _showDateTimePicker = () => isDateTimePickerVisible = true ;

    _hideDateTimePicker = () => isDateTimePickerVisible = false ;

    render(){
        return(
            <View style={{flex: 1}}>

                <View style={style.fieldcontainer}>

                    <TextInput style={style.text}
                        placeholder="Event Title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handlechangetext}
                    />

                    <TextInput style={style.text}
                        placeholder="Event Date"
                        spellCheck = {false}
                        value={formatDateTime(this.state.date.toString())}
                        editable={this.isDateTimePickerVisible}
                        onFocus={this._showDateTimePicker}
                    />

                    <DateTimePicker 
                        isVisible={this.isDateTimePickerVisible}
                        mode="datetime"
                        onConfirm= {this.handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />

                </View>

                <Button style={style.button} 
                    title="Add" 
                    onPress={this._storedata} 
                />

            </View>
        );
    }
}

export default Eventform;