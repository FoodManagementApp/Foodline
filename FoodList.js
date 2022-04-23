import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Button,
    Pressable
} from 'react-native';
import { MainContext } from './App';
import Swipeout from 'react-native-swipeout';
import { storage } from './storage';
import ProgressBar from 'react-native-progress/Bar';

function FoodList() {
    const mc = React.useContext(MainContext);
    let listArr = [];
    let foodInfoList = [];
    // Current date
    let currentDate = new Date();
    //componentDidUpdate
    useEffect(() => { storage.save('foodListInStorage', mc.state.foodList) })

    var sortCode = mc.state.sortCode==undefined?'2':mc.state.sortCode
    if (mc.state.foodList.length >= 0) {
        // Handle the visible of details page
        let visible = [];
        for (let j = 0; j < mc.state.foodList.length; j++) { visible.push(false) }
        const [detailsVisible, setDetailsVisible] = useState({ visibleList: visible });
        const showDetails = (i) => {
            visible[i] = true;
            setDetailsVisible({ visibleList: visible });
        }
        const hideDetails = (i) => {
            visible[i] = false;
            setDetailsVisible({ visibleList: visible });
        }

        for (let i = 0; i < mc.state.foodList.length; i++) {
            let foodInfo = []
            let bbDate = new Date(mc.state.foodList[i].bbDate);
            let addDate = new Date(mc.state.foodList[i].addDate);
            var differenceTime = bbDate.getTime() - currentDate.getTime();
            var differenceDay = (differenceTime / (1000 * 3600 * 24)).toFixed(0);
            var oldleftTime = bbDate.getTime() - addDate.getTime();
            var oldleftDay = (oldleftTime / (1000 * 3600 * 24)).toFixed(0);
            var foodName = mc.state.foodList[i].foodName;
            var foodNamePreview = foodName.length > 10 ? foodName.substring(0, 10) + "..." : foodName;
            var imageUrl = mc.state.foodList[i].imageUrl;
            var imagePreview = imageUrl === undefined ? require("./src/img/png/carrot.png") : { uri: imageUrl };
            var remark = mc.state.foodList[i].remark
            var remarkPreview = remark == undefined ? "No notes" : remark
            foodInfo.push(foodName, addDate.toDateString(), bbDate.toDateString(), remarkPreview)
            foodInfoList.push(foodInfo)
            var barColor = '#58c0a9'
            var dayRate = oldleftDay==0?((oldleftDay-differenceDay)/oldleftDay):1/1
            if(dayRate>=0.9){
                barColor = '#fb7373'
            }else if(dayRate<0.9 && dayRate>0.5){
                barColor = '#ffcc00'
            }else if(dayRate<=0.5 && dayRate>0){
                barColor = '#58c0a9'
            }
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
                    }
                }
            ]

            let item = (
                <View key={[i, differenceDay, foodName, addDate]}>
                    <Swipeout right={swipeoutBtns} style={{ backgroundColor: '#ffffff' }}>
                        <TouchableOpacity onPress={() => { showDetails(i) }}>
                            <View style={[styles.flexs, { height: 80 }]}>
                                <Image style={[styles.foodImage]} source={imagePreview}></Image>
                                <Text style={[styles.TitleName]}>{foodNamePreview}</Text>
                                <Text style={differenceTime > 0 ? styles.Number : styles.expiredNumber}>{differenceTime > 0 ? differenceDay : differenceDay}</Text>
                                <Text style={[styles.Days]}>{(differenceDay < 2 && differenceDay > -2) ? "day" : "days"}</Text>
                            <View style={[styles.progressBarContainer]}>
                            <ProgressBar 
                                progress={dayRate} 
                                width={220} color={barColor} />
                            </View>
                            </View>
                            
                        </TouchableOpacity>
                    </Swipeout>

                    {/* Show details of food */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={detailsVisible.visibleList[i]}
                        onRequestClose={() => {
                            { hideDetails(i) };
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                            <View style={[styles.buttonContainer]}>
                                <Pressable onPress={() => { 
                                            mc.setState({
                                                page: '3',
                                                foodList: mc.state.foodList,
                                                index: i
                                            }) 
                                        }}>
                                    <Image source={require('./src/img/png/edit.png')} style={{height: 30, width: 30, left: 140, top: -20}}></Image>
                                </Pressable>
                                </View>
                                <Image style={[styles.detailsImage]} source={imagePreview}></Image>
                                <Text style={styles.detailsNameText}>{foodInfoList[i][0]}</Text>
                                <Text style={styles.detailsBBDText}>Best Before Date: {foodInfoList[i][2]}</Text>
                                <Text style={styles.detailsAddDateText}>Date Added: {foodInfoList[i][1]}</Text>
                                <Text style={styles.detailsNoteText}>Notes: {foodInfoList[i][3]}</Text>
                                <View style={[styles.buttonContainer]}>
                                    <Button
                                        title="OK"
                                        color="#58c0a9"
                                        onPress={() => { hideDetails(i) }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>

                    

                </View>

            )
            listArr.push(item)
        }  
    }
    return (
        <View>
            {/* sortCode 0: initial character 1:date added 2: best before time */}
            {listArr.length > 0 ? 
                (sortCode == '0' ? 
                    listArr.sort(function (a, b) { return a.key.split(",")[2].localeCompare(b.key.split(",")[2]) }) 
                : (sortCode == '1' ? 
                    listArr.sort(function (a, b) {var da = new Date(a.key.split(",")[3]).valueOf()
                    var db = new Date(b.key.split(",")[3]).valueOf()
                return da - db}) 
                : (sortCode =='2'?listArr.sort(function (a, b) { return a.key.split(",")[1] - b.key.split(",")[1] })
                :listArr.sort(function (a, b) {var da = new Date(a.key.split(",")[3]).valueOf()
                var db = new Date(b.key.split(",")[3]).valueOf()
            return db - da}) ))) 
            : <Text style={{ textAlign: 'center' }}>nothing here</Text>}
            <View style={{ height: 100 }}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarContainer: {
        display: 'flex',
        position: 'absolute',
        left: 100,
        flexDirection: 'row',
        top:45,
        justifyContent: 'center',
      },
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

    expiredNumber: {
        position: 'absolute',
        right: 85,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fb7373',
        marginTop: 20,
        height: 70,
        width: 100,
        textAlign: 'right',
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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },



    buttonContainer: {
        margin: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        height: 40,
        width: 100,
        borderRadius: 20
    },

    detailsImage: {
        display: 'flex',
        alignItems: 'center',
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },

    detailsNameText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
        color: '#212121'
    },

    detailsAddDateText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 15,
        color: '#212121'
    },

    detailsBBDText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 15,
        color: '#212121'
    },

    detailsNoteText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 15,
        color: '#212121'
    },

})


export default FoodList;