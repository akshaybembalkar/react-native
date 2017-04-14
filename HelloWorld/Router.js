
import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity
} from 'react-native'

import HomeContainer from './HomeContainer'
import AboutContainer from './AboutContainer'
export default class Router extends Component {
   constructor(){
      super()
   }
   render() {
      return (
         <Navigator
            initialRoute = {{ name: 'Home', title: 'Home' }}
            renderScene = { this.renderScene }
            /*navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            }*/
         />
      );
   }
   
   renderScene(route, navigator) {
        if(route.name == 'Home') {
           return (
              <HomeContainer
                 navigator = {navigator}
                 {...route.passProps}
              />
           )
        }
        if(route.name == 'About') {
         return (
            <AboutContainer
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
  /*      if(route.name == 'About') {
           return (
              <AboutContainer
                 navigator = {navigator}
                 {...route.passProps}
              />
           )
        }*/
     }
  }
