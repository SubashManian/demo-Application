import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
    image: {
      width: imageWidth,
      height: imageHeight,
    }
  });

const slides = [
    {
      key: 'splash1',
      title: 'Welcome',
      text: 'Thank You for Installing Our App',
      image: require('../assets/1.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#077F43',
    },
    {
      key: 'splash2',
      title: 'Enjoy the Features',
      text: 'Make use of our cool stuff & Features',
      image: require('../assets/2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'splash3',
      title: 'Share Your Experience',
      text: 'Feel Free to send any comments to Our Development Team',
      image: require('../assets/3.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#077F43',
    }
];

export default class App extends React.Component {
    state = {
      showRealApp: false
    }

    _onSkip =() =>{
        this.setState({showRealApp: true});
    }

    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    render() {
      if (this.state.showRealApp) {
        return (
            this.props.navigation.navigate('Home')
        );
      } else {
        return <AppIntroSlider slides={slides} 
                onDone={this._onDone} 
                showSkipButton={true}
                onSkip={this._onSkip}/>;
      }
    }
}

