
import React, { Component } from 'react'
import Button from 'react-native-button'
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   Console,
   TouchableHighlight
} from 'react-native'

export default class LoginScreen extends Component {
   constructor(props) {
      super(props);
      this.state  = {username: '',
                      password: ''};
   }
   render() {
      return (
         <View style={styles.container}>
            <TextInput
             style={styles.textInput}
             placeholder = "Username"
             onChange={(event) => this.setState({username:event.nativeEvent.text})}
             value = {this.state.username}>
            </TextInput>
            <TextInput
               style={styles.textInput}
               placeholder = "Password"
               onChange={(event) => this.setState({password:event.nativeEvent.text})}
               value = {this.state.password}>
            </TextInput>
            <TouchableHighlight
              style = {styles.button}
              onPress= {()=>this._onLogin()}>
              <Text>Login</Text>
            </TouchableHighlight>
         </View>
      )
   }

   _onLogin(){
     let user = this.state.username;
     let pass = this.state.password;
     if(user=='Admin' && pass=='Admin')
      alert('loging In');
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
   button: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'black',
      marginTop: 5
   },
   textInput: {
     textAlign: 'center',
     height: 40,
     width: 150,
     borderColor: 'gray',
     borderWidth: 1
   }
 });
