import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { MainContext } from './App';

function FoodList() {
    const mc = React.useContext(MainContext);
        let listArr = [];
        if (mc.state.foodList.length>0){
            for( let i =0; i<mc.state.foodList.length; i++){
                let item = (
                <View key = {i}>
                  <View style={[styles.flexs, { height: 80}]}>
                  <Image style={{ left: 50, width: 50, height: 50, resizeMode: 'contain'}} source={require('./src/img/png/返回-黑.png')}></Image>
                  <Text style={[styles.TitleName]}>{mc.state.foodList[i].foodName}</Text>
                  <Text style={[styles.Number]}>{mc.state.foodList[i].number}</Text>
                  <Text style={[styles.Days]}>{mc.state.foodList[i].day}</Text>
                  <Image style={{ left: -60, width: 300, height: 50, marginTop: 40, resizeMode: 'contain'}} source={require('./src/img/png/进度条.png')}></Image>
                  </View>
                </View>
                )
                listArr.push(item)
        }
        } else {
            listArr = <Text>nothing here</Text>
        }

    return (
        <View>
            {listArr} 
        </View>
    )



    
}

const styles = StyleSheet.create({

    flexs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    TitleName: {
        left: 68,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: '#333333',
        marginTop: 20,
        height: 70
    },

    Number: {
        left: 230,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        color: '#333333',
        marginTop: 20,
        height: 70

    },

    Days: {
        left: 240,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: '#233333',
        marginTop: 10,
        height: 50

    }



})


export default FoodList;