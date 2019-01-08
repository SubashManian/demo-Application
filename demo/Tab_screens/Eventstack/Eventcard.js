import React,{Component} from 'react';
import {Text , View ,StyleSheet } from 'react-native';
import {formatDate ,getcountdownpart } from './api';
import PropTypes from 'prop-types'

const style = StyleSheet.create({
    card:{
        backgroundColor: '#ffff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        margin: 10,
        marginTop: 10,
        marginBottom: 5
    },
    cardheader:{
        flex:1,
        flexDirection: 'row'
    },
    date:{
        fontWeight:'200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign:'right'
    },
    title:{
        fontSize:15,
        fontWeight:'300',
        marginLeft: 7,
        textAlign: 'left'
    },
    countercontainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft:'3%',
        paddingRight: '3%'
    },
    counter:{
        width: '25%',
        flex: 1
    },
    countertext:{
        fontSize: 40,
        textAlign: 'center'
    },
    counterlabel:{
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    }
});


export default function Eventcard({events}){
    const{days,hours,minutes,seconds} = getcountdownpart(events.date);

    return(
        <View style={style.card}>
            <View style={style.cardheader}>
                <Text style={style.date}>{formatDate(events.date)}</Text>
                <Text style={style.title}>{events.title}</Text>
            </View>

            <View style={style.countercontainer}>
                <View style={style.counter}>
                    <Text style={style.countertext}> {days}</Text>
                    <Text style={style.counterlabel}>Days</Text>
                </View>
                <View style={style.counter}>
                    <Text style={style.countertext}> {hours}</Text>
                    <Text style={style.counterlabel}>Hours</Text>
                </View>
                <View style={style.counter}>
                    <Text style={style.countertext}> {minutes}</Text>
                    <Text style={style.counterlabel}>Minutes</Text>
                </View>
                <View style={style.counter}>
                    <Text style={style.countertext}> {seconds}</Text>
                    <Text style={style.counterlabel}>Seconds</Text>
                </View>
            </View>
        </View>
    );
} 


Eventcard.propTypes = {
    events: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    })
};