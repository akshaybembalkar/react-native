import React, { Component } from 'react'
import Button from 'react-native-button'
import {
   View,
   StyleSheet,
   Alert,
   Text
} from 'react-native'
//import HomeButton from './HomeButton'

export default class HomeContainer extends Component {
   constructor() {
      super()
   }
   render() {
      return (

         <View style = {styles.container}>
            <Button
            style = {styles.button}
            //onPress = {() => this.openMenu()}>
            onPress={() => Alert.alert(
               'Choose from list',
               null,
               [
                 {text: 'Color Screen'},
                 {text: 'Login Screen',onPress: () => this.goToAbout()},

               ]
             )}>
              Click Here
              </Button>
         </View>

      )
   }
/*   openMenu = () =>{
     render(){
       return(
         <View>
         <TouchableHighlight style = {styles.wrapper}
         onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
          )}>

          <View style={styles.button}>
                      <Text>Alert with message and default button</Text>
          </View>
         </TouchableHighlight>

         </View>
       )
     }

     //);
      //alert("Menu button pressed!")
   }*/
   goToAbout = () => {
      this.props.navigator.push({
         name: 'About',
         title: 'About',
         openMenu: this.openMenu
      });
   }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
button: {
   borderWidth: 1,
   padding: 10,
   borderColor: 'black'
}
});


  /*<HomeButton goToAbout = {this.goToAbout}/>*/
