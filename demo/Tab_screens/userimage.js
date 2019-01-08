import React, { Component } from "react";
import { Text, StyleSheet, Animated, Dimensions, Easing,  Image, PixelRatio, TouchableOpacity, View} from 'react-native';
import { Container, Left, Right, Header, Body, Title} from "native-base";
import ImagePicker from 'react-native-image-picker';
import DeviceInfo from 'react-native-device-info';
import * as Animate from 'react-native-animatable';

var {width ,height} =Dimensions.get('window');
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesource: null,
      isModalVisible : false,
    }
    this.callFunc = this.callFunc.bind(this);
  }

  callFunc(){
    if(this.state.isModalVisible){
      this.setState({isModalVisible:false});
    }else{
      this.setState({isModalVisible:true});
    }
 }

  //imagePicker Funtion
  photobutton = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      if (response.error)
        console.log('ImagePicker Error: ', response.error);

      const apiLevel = DeviceInfo.getAPILevel();
      if(apiLevel >23){
        if (response.customButton){
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
          this.setState({
            imagesource: source,
          });
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>

          <Animate.Text animation='zoomIn'
            style = {{fontSize:50, fontWeight: '700', alignItems:'center',}}
            duration = {3000}
            direction = 'normal'
            onAnimationEnd = {this.callFunc}>
              Welcome
          </Animate.Text>

          {this.state.isModalVisible && 
            [
              <View style={[ styles.imageview, styles.imageContainer, { marginBottom: 20 }, ]}
              key='user_image'>

                {this.state.imagesource === null ? 
                (<Image style={styles.imageview} source={require('../assets/user-image.png')}/>) : 
                ( <Image style={styles.imageview} source={this.state.imagesource} /> ) }

              </View>,

              <TouchableOpacity onPress={this.photobutton.bind(this)} style={styles.button}
              key='image_select_button'>
                <Text style={{color:'white',fontSize:15,fontWeight:'400'}}>Select a Photo</Text>
              </TouchableOpacity>
            ]
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageview: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
  button:{
    margin:10, 
    padding:10, 
    width:'50%', 
    height:'4%',
    borderRadius:10,
    justifyContent:'center',
    backgroundColor:'#077F43', 
    alignItems:'center'
  }
});

export default Home;