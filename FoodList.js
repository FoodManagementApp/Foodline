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
            <Text>===Write your foodlist code here===</Text>
            <Text>{newList}</Text>
        </View>
    )
}


export default FoodList;