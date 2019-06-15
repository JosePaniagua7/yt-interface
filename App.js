import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navbar from './Components/Navbar';
import VideoContainer from './Components/VideoContainer';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  //<Navbar style={styles.navbar}/>  
  render() {
    return (
      <View style={styles.container}>
        <VideoContainer id={1}/>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',    
    justifyContent: 'center',    
    alignItems: 'center',
  },
  navbar:{
    width:'100%'
  }
})
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/