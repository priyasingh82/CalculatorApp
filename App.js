import React from 'react';
import {View,Text} from 'react-native'
import CalcClass from './components/calcClass'

export default class App extends React.Component{

render(){
  return (
    <View style = {{flex :1}}>
    
      <CalcClass/>
    </View>
  );
}
}

