import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button, AsyncStorage} from 'react-native';
import ActionButton from 'react-native-action-button';
import Eventcard from './Eventstack/Eventcard';
import { getEvents } from './Eventstack/api';

const style = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f3f3f3'
    },
    button: {
        height: 50,
        marginRight: 10,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        margin: 10,
        borderRadius:5  
    },
});

class Eventlist extends Component{

    state={
        events: []
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,timer:Date.now()
                })),
            });
        },1000);

        // this.props.navigation.addListener('didFocus',() =>{
        //     getEvents().then( events => this.setState({events}));
        // })
           
        
        const events =require('../db.json').events.map(e=> ({
             ...e,date: new Date(e.date),
         }));
        this.setState({events});
        //console.log(this.state.events);
    }

    handleactionbutton = () =>{
        this.props.navigation.navigate('AddEvent');
    }

    // componentWillUnmount(){
    //     close(setInterval)
    // }

    render(){
        return [

            <FlatList
                key = "flatlist"
                style={style.list}
                data={this.state.events}
                renderItem= {({item})=> <Eventcard events={item}/>}
                keyExtractor = {item => item.id}
            />,

            <ActionButton 
                key = "actionbutton"
                buttonColor="rgba(231, 75 , 50 ,2)" 
                title="New Event"
                onPress={this.handleactionbutton}
            />
    
        ];
    }

}

export default Eventlist;