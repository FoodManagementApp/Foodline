import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextInputPage from './TextInputPage';
import ImageInputPage from './ImageInputPage';
import FoodList from './FoodList';
import { MainContext } from './App';
//import LinearGradient from 'react-native-linear-gradient';

const MainPage = () => {

  const mc = React.useContext(MainContext);

  mainPress = () => {
    mc.setState({
      foodList: mc.state.foodList,
      page: "1",
    })
  }

  scanPress = () => {
    mc.setState({
      foodList: mc.state.foodList,
      page: "2",
    })
  }

    var botton = (
      <View style={[styles.UIBackground, { height: 150 }]}>
      <View style={[styles.InputChoiceBox]}>
        <TouchableOpacity onPress={scanPress}>
          <View style={[styles.scanButton]}>
            <Image source={require('./src/img/png/scan.png')} style={styles.InputChoiceImage}></Image>
            <Text style={{ color: '#58c0a9', textAlignVertical: 'center' }}>scan </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={mainPress}>
          <View style={[styles.writeButton]}>
            <Text style={{ color: '#58c0a9', textAlignVertical: 'center' }}> write</Text>
            <Image source={require('./src/img/png/textInput.png')} style={styles.InputChoiceImage}></Image>
          </View>
        </TouchableOpacity>

      </View>
      <TouchableOpacity onPress={mainPress}>
        <Image style={{ width: 45, height: 45, resizeMode: 'contain', top: -10 }} source={require('./src/img/png/carrot.png')}></Image>
      </TouchableOpacity>
    </View>
    )
    if (mc.state.page === '1') {
      return (
          <TextInputPage></TextInputPage>
      )
    } else if (mc.state.page === '2') {
      return (
          <ImageInputPage></ImageInputPage>
      )
    }else{
      return (
          <View >
            <View style={[styles.UIBackground, { height: 110 }]}>
              <Text style={styles.TitleText}>foodline</Text>
            </View>
            <ScrollView style={styles.FoodList}>
              <FoodList></FoodList>
            </ScrollView>
            {botton}
          </View>
      )
  }

}

const styles = StyleSheet.create({
  UIBackground: {
    display: 'flex',
    aligItems: 'center',
    minHeight: 100,
    backgroundColor: '#d8eddf',
    alignItems: 'center'
  },

  FoodList: {
    position: 'relative',
    height: 500,
    display: 'flex',
  },

  TitleText: {
    fontFamily: 'Lucida Calligraphy',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
  },

  InputChoiceImage: {
    width: 43,
    height: 43,
    resizeMode: 'contain'
  },

  InputChoiceBox: {
    top: -100,
    flexDirection: 'row',
    borderRadius: 9,
  },

  scanButton: {
    flexDirection: 'row',
    borderStyle: 'solid', 
    borderColor: '#bcbcbc', 
    borderWidth: 1, 
    borderRightWidth: 0.5, 
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10,
    backgroundColor: '#ffffff'
  },

  writeButton:{
    flexDirection: 'row', 
    borderStyle: 'solid', 
    borderColor: '#bcbcbc', 
    borderWidth: 1, 
    borderLeftWidth: 0.5, 
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff'
  }

})


export default MainPage;