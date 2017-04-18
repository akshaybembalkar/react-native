import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


import {
   StyleSheet,
   View,
   Text,
   Navigator,
   TouchableOpacity
} from 'react-native'
