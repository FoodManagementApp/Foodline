import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { MainContext } from './App';

function FoodList(props) {
    const listContext = React.useContext(MainContext);
    const list = listContext.state.foodList
    if (typeof (props.line) === "undefined") {
        var newList = list
    } else {
        var newList = list.push(props.line)
    }

    this.state = {
        list: [
            {
                foodName: "name",
                number: "10",
                day: "day"
            }
        ]
    }

    
    
        let listArr = [];
        for( let i =0; i<this.state.list.length; i++){
            let item = (
            <View>
              <View style={[styles.flexs, { height: 80}]}>
              <Image style={{ left: 50, width: 50, height: 50, resizeMode: 'contain'}} source={require('./src/img/png/返回-黑.png')}></Image>
              <Text style={[styles.TitleName]}>{this.state.list[i].food}</Text>
              <Text style={[styles.Number]}>{this.state.list[i].number}</Text>
              <Text style={[styles.Days]}>{this.state.list[i].day}</Text>
              <Image style={{ left: -60, width: 300, height: 50, marginTop: 40, resizeMode: 'contain'}} source={require('./src/img/png/进度条.png')}></Image>
              </View>
            </View>
            )
            listArr.push(item)

        return (
            <View style={[styles.flexs, { height: 80 }]}>
                {listArr} 
                <Image style={{ left: 50, width: 50, height: 50, resizeMode: 'contain' }} source={require('./src/img/png/返回-黑.png')}></Image>
                <Text style={[styles.TitleName]}>name</Text>
                <Text style={[styles.Number]}>10</Text>
                <Text style={[styles.Days]}>days</Text>
                <Image style={{ left: -60, width: 300, height: 50, marginTop: 40, resizeMode: 'contain' }} source={require('./src/img/png/进度条.png')}></Image>
            </View>
        )


    }



    
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