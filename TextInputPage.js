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

const TextInputPage = () => {
    const mc = React.useContext(MainContext);
    const [nameInput, setNameInput] = React.useState(mc.state.name);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [remark, setRemark] = useState();

    const backPress = () => {
        mc.setState({
            page: "0",
            foodList: mc.state.foodList
        })
    }

    const addFood = () => {
            if(nameInput!=null&&nameInput!=""&&nameInput[0]!=" "){
                if(date.getTime() - new Date().getTime()>999){
                let newList = [];
                for (let i = 0; i < mc.state.foodList.length; i++) {
                    newList.push(mc.state.foodList[i])
                }
                newList.push(
                    {
                        foodName: nameInput,
                        imageUrl: mc.state.imageUrl,
                        bbDate: date,
                        remark: remark
                    }
                )
                mc.setState({
                    page: "0",
                    foodList: newList
                }) 
            } else {
                alert("The food has expired or expired today~")
            }
        }else {
            alert("Please input your food name~\nOr your input is illegal.")
        } 

    }
    return (
        <View>
            <View style={[styles.flexs, { alignItems: 'center', height: 80 }]}>
                <TouchableOpacity onPress={backPress}>
                    <Image style={{ left: 20, width: 25, height: 25, resizeMode: 'contain', marginTop: 10 }} source={require('./src/img/png/返回-黑.png')}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={[styles.UIBackground, { height: 40 }]}>
                    {/* <Text style={{ position: 'absolute', left: 5, top: 30, fontSize: 15, width: 300 }}>The code on the food</Text> */}
                </View>

                <View style={[styles.input1, { height: 120 }]}>
                    <TextInput type="number" placeholder="barcode" style={[styles.InputCode]}>{mc.state.codeId}</TextInput>
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
                        {mc.state.name}
                    </TextInput>
                </View>
                <View style={[styles.flexs, { height: 50 }]}>
                    <Text style={[styles.TextBestBeforeDate]}>best before date</Text>
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
                    ></TextInput>
                </View>

                <View style={[styles.Button]}>
                    <Button
                        title="add"
                        color="#58c0a9"
                        onPress={addFood}
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
        margin: 30
    },

    selectDateButton: {
        position: 'absolute',
        display: 'flex',
        right: 30
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

    // InputBestBeforeDate: {
    //     borderStyle: 'solid',
    //     borderWidth: 2.5,
    //     height: 35,
    //     width: 50,
    //     borderRadius: 9,
    //     borderColor: '#f2f2f2',
    //     fontSize: 10,
    //     color: '#58c0a9',
    //     marginTop: 7.5,
    //     position: "absolute",
    //     textAlign: 'center'
    // },

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
    }

})

export default TextInputPage;