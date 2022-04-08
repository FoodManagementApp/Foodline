import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
 
const App = () => {

  return (
    <View >
      <View style={[styles.UIBackground, {height: 70}]}>
          <Text style={styles.TitleText}>foodline</Text>
      </View>
      <ScrollView style = {styles.FoodList}>
        <Text>
          这里是食品列表。
        </Text>
      </ScrollView>
      <View style={[styles.UIBackground, {height: 80}]}>
        <Image style={{width: 45, height: 45, resizeMode: 'contain', marginTop: 10}} source={require('./src/img/png/carrot.png')}></Image>
      </View>
    </View>
  )
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
  }

})


export default App;