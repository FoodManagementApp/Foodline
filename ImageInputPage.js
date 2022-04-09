import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import TextInputPage from './TextInputPage';

class ImageInputPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page : '2'
        }
    }

    render(){
        if(this.state.page==='1'){
            return(<TextInputPage></TextInputPage>)
        } else {
            return(
                <TouchableOpacity onPress={()=>this.setState({page : '1'})}>
                <Text>
                    ==========Camera page=======
                </Text>
                </TouchableOpacity>
            )
        }
    }
}



export default ImageInputPage;