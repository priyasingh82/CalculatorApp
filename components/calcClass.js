import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import BUTTONS from './Data';
import styles from './styles.js';

export default class CalcClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '',
    };
    this.getMathematical = this.getMathematical.bind(this);
  }

  getMathematical(str){
  return new Function('return ' + str)();
   }

  onButtonPress = (num) => {
    
    if (num == 'C') {
      this.setState({
        counter: '',
      });
    } 
    else if(num == '<-'){
      this.setState({
        counter : this.state.counter.slice(0,-1)
      })
    }
    else if(num == '='){
      var result = this.getMathematical(this.state.counter)
        this.setState({  
            counter : result.toString(),
    });

    }
    else {
      this.setState({
        counter: this.state.counter.replace(/^0+/, '') + num,
        
      });
    }
     
  
  };

  renderItem = ({ item }) => (
    <View style={[styles.sty, item.sty]}>
      <TouchableOpacity onPress={() => this.onButtonPress(item.text)}>
        <Text style={styles.title}> {item.text}</Text>
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.paragraph]}>
          <Text style={[styles.textAll]}>{this.state.counter}</Text>
        </View>

        <FlatList
          numColumns={4}
          data={BUTTONS}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
