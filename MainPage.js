import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  Modal
} from 'react-native';
import TextInputPage from './TextInputPage';
import ImageInputPage from './ImageInputPage';
import FoodList from './FoodList';
import StoreLoader from './StoreLoader';
import { MainContext } from './App';


const MainPage = () => {
  const mc = React.useContext(MainContext);
  const [modalVisible, setModalVisible] = useState(false);

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


  const sortfun0 = () => {
    mc.setState({
      page: "0",
      foodList: mc.state.foodList,
      sortCode: '0'
    })
    setModalVisible(!modalVisible)
  }
  const sortfun1 = () => {
    mc.setState({
      page: "0",
      foodList: mc.state.foodList,
      sortCode: '1'
    })
    setModalVisible(!modalVisible)
  }
  const sortfun2 = () => {
    mc.setState({
      page: "0",
      foodList: mc.state.foodList,
      sortCode: '2'
    })
    setModalVisible(!modalVisible)
  }

  const sortCancel = () => {
    setModalVisible(!modalVisible)
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
  } else if (mc.state.page === '-1') {
    return (
      <StoreLoader></StoreLoader>
    )
  } else {
    return (
      <View >
        <View style={[styles.UIBackground, { height: 110 }]}>
          {/* <Text style={styles.TitleText}>foodline</Text> */}
          {/* sort button */}
          <Pressable style={{ top: 70, left: 150 }}
            onPress={() => setModalVisible(true)}
          >
            <Image source={require('./src/img/png/sorting.png')} style={{ width: 25, height: 25 }}></Image>
          </Pressable>

          <Image style={{ width: 130, height: 43, resizeMode: 'contain', top: 5 }} source={require('./src/img/png/title.png')}></Image>
        </View>
        <ScrollView style={styles.FoodList}>
          <FoodList></FoodList>
        </ScrollView>
        {botton}
        {/* sort func */}
        <View style={styles.centeredView2}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView2}>
              <View style={styles.modalView}>

              <Pressable style = {{position: 'absolute', top: 10, right: 10}} onPress={sortCancel}>
                 <Image source={require('./src/img/png/cancel.png')} style={{ width: 25, height: 25 }}></Image>
                </Pressable>

                <View >
                <Text style={styles.modalText}>Sort</Text>
                </View>
                <Pressable
                  style={[styles.buttonSort, styles.buttonClose]}
                  onPress={sortfun0}
                >
                  <Text style={styles.textStyle}>by food name</Text>
                </Pressable>
                <Text style={styles.modalText}></Text>
                <Pressable
                  style={[styles.buttonSort, styles.buttonClose]}
                  onPress={sortfun2}
                >
                  <Text style={styles.textStyle}>by days left</Text>
                </Pressable>
                <Text style={styles.modalText}></Text>
                <Pressable
                  style={[styles.buttonSort, styles.buttonClose]}
                  onPress={sortfun1}
                >
                  <Text style={styles.textStyle}>by date added</Text>
                </Pressable>

              </View>
            </View>
          </Modal>
        </View>
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

  writeButton: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderLeftWidth: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ffffff'
  },

  // sort 
  centeredView2: {
    position: 'absolute',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 100,
    right: -10
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#58c0a9",
  },
  buttonClose: {
    backgroundColor: "#58c0a9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonSort: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

})


export default MainPage;