import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize'; 

export default class AppHeader extends Component{
  render(){
    return(
        <Header
          backgroundColor = '#233D4D'
          centerComponent={{ text: this.props.title, style: {color: '#61F2C2', padding: RFValue(20), textAlign: "center", fontWeight: 'bold', fontSize: RFValue(25)} }}        
          {...this.props}
        />

    )
  }
} 