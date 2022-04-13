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

function FoodList(props) {
    const listContext = React.useContext(MainContext);
    const list = listContext.state.foodList
    if (typeof(props.line) ==="undefined"){
        var newList = list
    } else {
        var newList = list.push(props.line)
    }

    
        return (
                
            <View>
              <View style={[styles.flexs, { height: 80}]}>
              <Image style={{ left: 50, width: 50, height: 50, resizeMode: 'contain'}} source={require('./src/img/png/返回-黑.png')}></Image>
              <Text style={[styles.TitleName]}>name</Text>
              <Text style={[styles.Number]}>10</Text>
              <Text style={[styles.Days]}>days</Text>
              <Image style={{ left: -60, width: 300, height: 50, marginTop: 40, resizeMode: 'contain'}} source={require('./src/img/png/进度条.png')}></Image>
              </View>
    
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

    Number:{
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