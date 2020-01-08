/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react'
import LoginScreen from './js/screens/Login'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}
var InitialARScene = require('./js/ARPortals/MainScene.js');
var VR_NAVIGATOR_TYPE = "VR";

export default class ViroSample extends Component {
    state = {
      navigatorType : VR_NAVIGATOR_TYPE,
      sharedProps : sharedProps
    }
 
  render() {
    return (
      <LoginScreen />
      // <ViroARSceneNavigator {...this.state.sharedProps}
      //   initialScene={{scene: InitialARScene}} />
    )
  }
}

module.exports = ViroSample
