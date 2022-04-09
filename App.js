import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: '0'
    }
  }

  mainPress = () => {
    if (this.state.page === '0') {
      this.setState(
        {
          page: "1"
        }
      )
    } else {
      this.setState(
        {
          page: "0"
        }
      )
    }

  };

  render() {
    if (this.state.page === '1') {
      return (
        <View><Text>123</Text>
          <TouchableOpacity onPress={this.mainPress}>
            <Image style={{ width: 45, height: 45, resizeMode: 'contain', marginTop: 10 }} source={require('./src/img/png/carrot.png')}></Image>
          </TouchableOpacity></View>
      )
    } else {
      return (
        <View >
          <View style={[styles.UIBackground, { height: 70 }]}>
            <Text style={styles.TitleText}>foodline</Text>
          </View>
          <ScrollView style={styles.FoodList}>
            <Text>
              这里是食品列表。
            </Text>
          </ScrollView>
          <View style={[styles.UIBackground, { height: 80 }]}>
          <View style={styles.InputChoiceBox}>
              <TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('./src/img/png/scan.png')} style={styles.InputChoiceImage}></Image>
                  <Text>scan</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.mainPress}>
                <View style={{ flexDirection: 'row' }}>
                  <Text>write</Text>
                  <Image source={require('./src/img/png/textInput.png')} style={styles.InputChoiceImage}></Image>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.mainPress}>
              <Image style={{ width: 45, height: 45, resizeMode: 'contain', top: -30}} source={require('./src/img/png/carrot.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  UIBackground: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },

  FoodList: {
    height: 420
  },

  TitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },

  InputChoiceImage: {
    width: 43,
    height: 43,
    resizeMode: 'contain'
  },

  InputChoiceBox: {
    top: -100,
    borderStyle: 'solid',
    borderWidth: 2,
    flexDirection: 'row',
  }

})


export default App;