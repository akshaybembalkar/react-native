import React, { Component } from 'react'
import Button from 'react-native-button'
import {
   View,
   Image,
   StyleSheet
} from 'react-native'

export default class LoginScreen extends Component {

  render() {
     return (
      <Image style={styles.background}
      source={require('./image/1.jpeg')}>
      </Image>
     );
   }
}

const styles = StyleSheet.create({
  background : {
    flex: 1,
    resizeMode: 'cover',
  }
});
