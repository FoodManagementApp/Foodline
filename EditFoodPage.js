import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { MainContext } from './App';
import DatePicker from 'react-native-date-picker';

const EditFoodPage = () => {
    const mc = React.useContext(MainContext);
    const index = mc.state.index;
    const [nameInput, setNameInput] = React.useState(mc.state.foodList[index].foodName);
    const [date, setDate] = useState(new Date(mc.state.foodList[index].bbDate));
    const [open, setOpen] = useState(false);
    const [remark, setRemark] = useState(mc.state.foodList[index].remark);
    var imageUrl = mc.state.foodList[index].imageUrl;
    var imagePreview = imageUrl === undefined ? require("./src/img/png/carrot.png") : { uri: imageUrl };

    const backPress = () => {
        mc.setState({
            page: "0",
            foodList: mc.state.foodList
        })
    }

    const saveEdits = () => {
        if(nameInput!=null&&nameInput!=""&&nameInput[0]!=" "){
            mc.state.foodList[index].foodName = nameInput;
            mc.state.foodList[index].bbDate = date;
            mc.state.foodList[index].remark = remark;
            mc.setState({
                page: "0",
                foodList: mc.state.foodList
            })
        }else {
            alert("Please input your food name~\nOr your input is illegal.")
        } 
    }

    return (
        <View>
            <View style={[styles.flexs, { alignItems: 'center', height: 80 }]}>
                <TouchableOpacity onPress={backPress}>
                    <Image style={{ left: 20, width: 25, height: 25, resizeMode: 'contain', marginTop: 10 }} source={require('./src/img/png/back_black.png')}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={[styles.UIBackground, { height: 20 }]}></View>
                <View style={[styles.imageCenter]}>
                   <Image style={[styles.detailsImage]} source={imagePreview}></Image>
                </View>
                <View style={[styles.UIBackground, { height: 80 }]}>
                    <Text style={{ position: 'absolute', left: 5, top: 50, fontSize: 15, width: 300 }}>Type the information of the food</Text>
                </View>

                <View style={[styles.flexs, { height: 50 }]}>
                    <Text style={[styles.TextName]}>name</Text>
                    <TextInput
                        style={[styles.InputName]}
                        onChangeText={newName => setNameInput(newName)}
                    >
                        {mc.state.foodList[index].foodName}
                    </TextInput>
                </View>
                <View style={[styles.flexs, { height: 50 }]}>
                    <Text style={[styles.TextBestBeforeDate]}>best before date</Text>
                    <Text style={[styles.selectedDate]}>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</Text>
                    <View style={[styles.selectDateButton]}>
                    <Button title="Select Date" color="#58c0a9" onPress={() => setOpen(true)}/>
                    </View>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        mode = "date"
                    />
                </View>
                <View style={[styles.flexs, { height: 50 }]}>
                    <Text style={[styles.TextRemark]}>notes</Text>
                    <TextInput 
                        style={[styles.InputRemark]}
                        onChangeText={newRemark => setRemark(newRemark)}
                    >
                        {mc.state.foodList[index].remark}
                    </TextInput>
                </View>

                <View style={[styles.Button]}>
                    <Button
                        title="Save"
                        color="#58c0a9"
                        onPress={saveEdits}
                    />
                </View>
                <View style={[styles.Button]}>
                    <Button
                        title="Cancle"
                        color="#58c0a9"
                        onPress={backPress}
                    />
                </View>
                <View style={{height: 30}}></View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

    Button: {
        display: 'flex',
        margin: 15
    },

    selectDateButton: {
        position: 'absolute',
        display: 'flex',
        right: 30
    },

    selectedDate: {
        left: 165,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333333',
        marginTop: 7.5,
        position: "absolute",
        width: 300,
    },

    flexs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    UIBackground: {
        display: 'flex',
        backgroundColor: '#f2f2f2',
    },

    InputCode: {
        borderStyle: 'solid',
        borderWidth: 2.5,
        height: 40,
        width: 300,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 15,
        textAlign: 'center',
        color: '#58c0a9'
    },

    Or: {
        position: 'relative',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: '#333333',
        marginTop: 20,
    },

    TextName: {
        left: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333333',
        marginTop: 10,
        position: "absolute",
        width: 300,
    },

    TextBestBeforeDate: {
        left: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333333',
        marginTop: 7.5,
        position: "absolute",
        width: 300,
    },

    TextRemark: {
        left: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333333',
        marginTop: 3,
        position: "absolute",
        width: 300,
    },

    input1: {
        height: 50,
        width: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        position: 'relative'
    },

    InputName: {
        right: 20,
        borderStyle: 'solid',
        borderWidth: 2.5,
        height: 40,
        width: 178,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 15,
        color: '#58c0a9',
        marginTop: 10,
        position: "absolute",
        textAlign: 'center'
    },

    InputRemark: {
        right: 20,
        borderStyle: 'solid',
        borderWidth: 2.5,
        height: 40,
        width: 178,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 15,
        color: '#58c0a9',
        marginTop: 3,
        position: "absolute",
        textAlign: 'center'
    },

    FoodList: {
        height: 420,
        position: "absolute"
    },

    TitleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        position: "absolute"
    },

    imageCenter: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#f2f2f2',
    },

    detailsImage: {
        display: 'flex',
        alignItems: 'center',
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },

})

export default EditFoodPage;