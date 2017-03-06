import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Linking
} from 'react-native';

const link = "https://mwe.bcbsfl.com/"

import SafariView from 'react-native-safari-view'

export default class Browser extends Component {

  _componentDidMount(){
    //alert("test")
    Linking.canOpenURL(link)
    .then((supported)=>{
      if(!supported){
        alert("url not supported")
      }else{
        return Linking.openURL(link)
      }
    })
    .catch((error)=>{
      alert("An Error Occured")
    })
  }

  componentDidMount(){
    SafariView.show({
    url: link
    });
  }


  render() {
    return (
        <View/>
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
});

AppRegistry.registerComponent('Browser', () => Browser);
