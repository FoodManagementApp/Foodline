import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
 
const App = () => {

  return (
    <View>
      <View style = {{marginBottom: 8, padding: 8, backgroundColor: 'blue'}}>
        <Text style = {{color : 'white', alignItems: "center"}}>yeyeyeyee</Text>
      </View>
      <View style = {{marginBottom: 8, padding: 8, backgroundColor: 'skyblue'}}>
        <Text style = {{color : 'white', alignItems: "center"}}>yeyeyeyee</Text>
      </View>
      <View style={styles.View}>
        <Text>HelloWorld~~</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    height: 200,
    // width: 200,
    backgroundColor: 'rgba(200, 255, 0, 0.5)'
  }
})


export default App;