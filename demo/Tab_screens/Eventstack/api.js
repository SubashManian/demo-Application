import moment from 'moment';
import { Asyncstorage } from 'react-native';
//import Expo from 'expo';
import uuid from 'uuid';

// const { manifest } = Expo.Constants;
// const api = manifest.packagerOpts.dev ? manifest.debuggerHost.split(':').shift().concat(':3000') : ' productionurl.com'

// const url = `http://${api}/events`;

// export function getEvents(){
//     return fetch(url)
//         .then(response => {
//             console.log(response);
//             return response.json()})
//         .then(events => events.map(e => ({ ...e , date: new Date(e.date)})));
// }

// export function saveEvent({ title, date }) {
//     return fetch(url , {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             date,
//             id: uuid(),
//         }),
//         headers : new Headers({
//             'Content-Type' : 'application/json',
//         })
//     })
//     .then(res => res.json())
//     .catch(err => console.error(err));
// }

// const db = openDatabase({name: 'remainder.db'});

// export function insertdata(events){
//     try{
//         await Asyncstorage.setItem('Events' , JSON.stringify(events))
//     }catch (error) {
//        console.log(error);
//     }
// }


export function formatDate(datestring){
    const parsed = moment(new Date(datestring));

    if(!parsed.isValid)
        return datestring;

    return parsed.format('D MM YYYY');
}

export function getcountdownpart(eventDate){
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return{
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds')
    };
}

export function formatDateTime(datestring){
    const parsed = moment(new Date(datestring));

    if(!parsed.isValid)
        return datestring;
    return parsed.format('H:mm A on D MMM YYYY');
}