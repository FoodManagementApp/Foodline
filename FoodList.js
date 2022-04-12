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
    var newList = props==="undefined"?list:list.push(props.line)

    // alert("list: " + newList + "props: " + props.line)
    return (
        <View>
            <Text>===Write your foodlist code here===</Text>
            <Text>{newList}</Text>
        </View>
    )
}


export default FoodList;