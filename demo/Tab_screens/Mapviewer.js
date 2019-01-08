import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Container, Left, Right, Header, Body, Title, View } from "native-base";
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceInfo from 'react-native-device-info';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';

class Mapviewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      mapregion: null,
    };
  }

  //After render Component execute funtion
  componentDidMount() {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({ 
      message: "<h2>Use Location?</h2> \
                  This app wants to change your device settings:<br/><br/>\
                  Use GPS for location<br/><br/>", 
      ok: "YES", 
      cancel: "NO" 
    }).then(() => { 
       this.find_location;
    }).catch((error)=>{
      console.log('response'+error);
    })
  }

  //GPS Location Finder Function
  find_location = () =>{
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5,
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    }, (error)=>console.log(error));
  }

  //GPS Button Function
  _showlocation = (e) =>{
    if(this.state.latitude !== null){
      let region = {
        latitude:       this.state.latitude,
        longitude:      this.state.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    }
    else{
      LocationServicesDialogBox.checkLocationServicesIsEnabled({ 
        message: "<h2>Use Location?</h2> \
                    This app wants to change your device settings:<br/><br/>\
                    Use GPS for location<br/><br/>", 
        ok: "YES", 
        cancel: "NO" 
      }).then(() => { 
         this.find_location;
      }).catch((error)=>{
        console.log('response'+error);
      })
    }
  }

  onRegionChange= (region, latitude, longitude) =>{
    this.setState({
      mapregion: region,
      latitude: latitude || this.state.latitude,
      longitude: longitude || this.state.longitude
    });
  }

  componentWillUnmount(){
    LocationServicesDialogBox.stopListener();
  }

 render() {
    return [
      <MapView style = {styles.mapview}
        key = "map"
        region={this.state.mapregion}
        showsUserLocation={true}
        followUserLocation={true}>
      </MapView>,

      <ActionButton 
        key = "actionbutton"
        buttonColor="rgba(168, 168, 163, 1)" 
        title="New Event"
        onPress = {this._showlocation}
        renderIcon = {(active) => (active?  <Icon name='gps-not-fixed' size ={25}/> : <Icon name='gps-fixed' size ={25}/>)}
      />
    ]
  }
}

const styles = StyleSheet.create({
  mapview:{
    flex:1,
  }
});

export default Mapviewer;