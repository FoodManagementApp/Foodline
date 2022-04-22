import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Pressable
} from 'react-native';
import { MainContext } from './App';
import Swipeout from 'react-native-swipeout';
import {storage} from './storage'

function FoodList() {
    const mc = React.useContext(MainContext);
    let listArr = [];
    let foodInfoList = [];
    // Current date
    let currentDate = new Date();

    //componentDidUpdate
    useEffect(()=>{storage.save('foodListInStorage', mc.state.foodList)}) 


    if (mc.state.foodList.length >= 0) {
        
        // Handle the visible of details page
        let visible = [];
        for (let j = 0; j < mc.state.foodList.length; j++) {visible.push(false)}
        const [detailsVisible, setDetailsVisible] = useState({visibleList:visible});
        const showDetails = (i) => {
            visible[i] = true;
            setDetailsVisible({visibleList:visible});
        }
        const hideDetails = (i) => {
            visible[i] = false;
            setDetailsVisible({visibleList:visible});
        }

        for (let i = 0; i < mc.state.foodList.length; i++) {
            let foodInfo = []
            let bbDate = new Date(mc.state.foodList[i].bbDate);
            var differenceTime = bbDate.getTime() - currentDate.getTime();
            var differenceDay = (differenceTime / (1000 * 3600 * 24)).toFixed(0) >>> 0;
            var foodName = mc.state.foodList[i].foodName;
            var foodNamePreview = foodName.length > 10 ? foodName.substring(0, 10) + "..." : foodName;
            var imageUrl = mc.state.foodList[i].imageUrl;
            var imagePreview = imageUrl === undefined ? require("./src/img/png/carrot.png") : { uri: imageUrl };
            var remark = mc.state.foodList[i].remark
            var remarkPreview = remark == undefined ? "No notes" : remark
            foodInfo.push(foodName, bbDate.toDateString(), remarkPreview)
            foodInfoList.push(foodInfo)

            var swipeoutBtns = [
                {
                backgroundColor: '#fb7373',
                underlayColor: '#fb7373',
                title: 'Delete',
                color: "#ffffff",
                text: 'Delete',
                // Delete
                   onPress: () => {
                    let newList = [];
                    for (let i = 0; i < mc.state.foodList.length; i++) {
                        newList.push(mc.state.foodList[i])
                    }
                    ; newList.splice(i, 1); mc.setState({
                    page: "0",
                    foodList: newList
                    })
                }}
            ]

            let item = (
                <View key={[i, parseInt(differenceDay)]}>
                    <Swipeout right={swipeoutBtns} style = {{backgroundColor: '#ffffff'}}>
                    {/* <TouchableOpacity onPress={() => { Alert.alert(foodInfoList[i][0], "Best before date: \n" + foodInfoList[i][1] + "\nNotes:\n" + foodInfoList[i][2]) }}> */}
                    <TouchableOpacity onPress={() => {showDetails(i)}}>
                        <View style={[styles.flexs, { height: 80 }]}>
                            <Image style={[styles.foodImage]} source={imagePreview}></Image>
                            <Text style={[styles.TitleName]}>{foodNamePreview}</Text>
                            <Text style={styles.Number}>{differenceDay}</Text>
                            <Text style={[styles.Days]}>{differenceDay < 2 ? "day" : "days"}</Text>
                        </View>
                    </TouchableOpacity>
                    </Swipeout>

                    {/* Show details of food */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={detailsVisible.visibleList[i]}
                        onRequestClose = {()=> {
                            {hideDetails(i)};
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Image style={[styles.detailsImage]} source={imagePreview}></Image>
                                <Text style={styles.detailsNameText}>{foodInfoList[i][0]}</Text>
                                <Text style={styles.detailsBBDText}>Best before date: {foodInfoList[i][1]}</Text>
                                <Text style={styles.detailsNoteText}>Notes: {foodInfoList[i][2]}</Text>

                                <Pressable
                                   style={[styles.button, styles.buttonClose]}
                                   onPress={() => {hideDetails(i)}}
                                >
                                    <Text style={styles.textStyle}>OK</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                </View>
                
            )
            listArr.push(item)
        } 
        listArr.sort(function(a,b){return a.key.split(",")[1] - b.key.split(",")[1]})
    }
    
    return (
        <View>
            {listArr.length>0?listArr:<Text style={{ textAlign: 'center' }}>nothing here</Text>}
            <View style={{ height: 100 }}></View>
        </View>
    )

}

const styles = StyleSheet.create({

    foodImage: {
        display: 'flex',
        position: 'absolute',
        left: 10,
        width: 50, height: 50, resizeMode: 'contain'
    },

    flexs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    TitleName: {
        position: 'absolute',
        left: 100,
        width: 300,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333333',
        height: 50
    },

    Number: {
        position: 'absolute',
        right: 85,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333333',
        marginTop: 20,
        height: 70,
        width: 100,
        textAlign: 'right',
    },

    BigNumber: {
        position: 'absolute',
        right: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333333',
        marginTop: 20,
        height: 60,
        width: 100
    },


    Days: {
        position: 'absolute',
        right: 0,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#233333',
        marginTop: 10,
        height: 50,
        width: 80,
    },

    Process: {
        right: 30, width: 250, height: 50, top: 30, resizeMode: 'contain',
        position: 'absolute'
    },




    // container: {
    //     flex: 1,
    //     backgroundColor: '#333333',
    // },
    // pre: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     // borderWidth: Pixel,
    //     borderColor: '#FFB1B1',
    //     width: px2dp(213),
    //     height: px2dp(20),
    //     borderRadius: px2dp(20),
    //     paddingLeft: px2dp(10),
    //     paddingRight: px2dp(10),
    //     marginBottom: px2dp(10),
    //     marginTop: px2dp(10),
    //     position: 'relative',
    //     overflow: 'hidden',
    // },
    // preMain: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     height: 20,
    //     position: 'relative',
    //     flex: 1,
    //     zIndex: 9
    // },
    // preOisn: {
    //     position: 'absolute',
    //     height: px2dp(20),
    //     backgroundColor: '#FFCFCF',
    //     borderBottomLeftRadius: px2dp(2000),
    //     borderTopLeftRadius: px2dp(2000),
    //     zIndex: 8
    // },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    detailsImage: {
        display: 'flex',
        alignItems: 'center',
        width: 150, height: 150, resizeMode: 'contain'
    },
    detailsNameText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
    },
    detailsBBDText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 15,
    },
    detailsNoteText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 15,
    },

})


export default FoodList;