import React from 'react';
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

const TextInputPage = () => {
    const mc = React.useContext(MainContext);
    const [nameInput, setNameInput] = React.useState(mc.state.name);

    const backPress = () => {
        mc.setState({
            page: "0",
            foodList: mc.state.foodList
        })
    }

    const addFood = () => {
        let newList = [];
            for (let i = 0; i < mc.state.foodList.length; i++) {
                newList.push(mc.state.foodList[i])
            }
            newList.push(
                {
                    foodName: nameInput,
                    number: "80",
                    imageUrl: mc.state.imageUrl
                }
            )
            mc.setState({
                page: "0",
                foodList: newList
            }) 
    }
    return (
        <View>
            <View style={[styles.flexs, { alignItems: 'center', height: 80 }]}>
                <TouchableOpacity onPress={backPress}>
                    <Image style={{ left: 20, width: 25, height: 25, resizeMode: 'contain', marginTop: 10 }} source={require('./src/img/png/返回-黑.png')}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={[styles.UIBackground, { height: 60 }]}>
                    <Text style={{ position: 'absolute', left: 5, top: 30, fontSize: 15, width: 300 }}>Type the code on the food</Text>
                </View>

                <View style={[styles.input1, { height: 120 }]}>
                    <TextInput type="number" placeholder="code" style={[styles.InputCode]}>{mc.state.codeId}</TextInput>
                </View>

                <View style={[styles.UIBackground, { height: 100 }]}>
                    <Text style={{ position: 'absolute', left: 5, top: 70, fontSize: 15, width: 300 }}>Type the information of the food</Text>
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
                    <TextInput style={[styles.InputBestBeforeDate, { right: 20 }]}></TextInput>
                    <TextInput style={[styles.InputBestBeforeDate, { right: 85 }]}></TextInput>
                    <TextInput style={[styles.InputBestBeforeDate, { right: 150 }]}></TextInput>
                </View>
                <View style={[styles.flexs, { height: 50 }]}>
                    <Text style={[styles.TextRemark]}>remark</Text>
                    <TextInput style={[styles.InputRemark]}></TextInput>
                </View>

                <View style={[styles.Button]}>
                    <Button
                        title="add"
                        color="#58c0a9"
                        onPress={addFood}
                    />
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

    Button: {
        display: 'flex',
        margin: 60
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
        height: 35,
        width: 300,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 10,
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
        width: 300
    },

    TextBestBeforeDate: {
        left: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333333',
        marginTop: 7.5,
        position: "absolute",
        width: 300
    },

    TextRemark: {
        left: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333333',
        marginTop: 3,
        position: "absolute",
        width: 300
    },

    input1: {
        height: 50,
        width: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    },

    InputName: {
        right: 20,
        borderStyle: 'solid',
        borderWidth: 2.5,
        height: 35,
        width: 178,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 10,
        color: '#58c0a9',
        marginTop: 10,
        position: "absolute"
    },

    InputBestBeforeDate: {
        borderStyle: 'solid',
        borderWidth: 2.5,
        height: 35,
        width: 50,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 10,
        color: '#58c0a9',
        marginTop: 7.5,
        position: "absolute"
    },

    InputRemark: {
        right: 20,
        borderStyle: 'solid',
        borderWidth: 2.5,
        height: 35,
        width: 178,
        borderRadius: 9,
        borderColor: '#f2f2f2',
        fontSize: 10,
        color: '#58c0a9',
        marginTop: 3,
        position: "absolute"
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