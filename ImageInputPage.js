import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextInputPage from './TextInputPage';

class ImageInputPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page : '2'
        }
    }

    backPress = () => {
        this.setState(
            {
                page: '1'
            }
        )
    }

    render(){
        if(this.state.page==='1'){
            return(<TextInputPage></TextInputPage>)
        } else {
            return(
                <View style={{backgroundColor:'#222222'}}>
                    <View style={[styles.flexs, {height: 80 }]}>
                        <TouchableOpacity onPress={this.backPress}>
                            <Image style={[styles.imageBack]} source={require('./src/img/png/返回.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={[styles.textProblems]}>any problems?</Text>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <Image style={[styles.imageMore]} source={require('./src/img/png/更多.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewCameraFunction]}>
                        <Text>======Camera Function Here======</Text>
                    </View>

                    <View style={[styles.viewReminder]}>
                        <Text style={[styles.textReminder]}>Please scan the code on the food</Text>
                    </View>
                </View>
                
            )
        }
    }
}

const styles = StyleSheet.create({

    flexs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    imageBack: {
        left: 20, 
        width: 25, 
        height: 25, 
        resizeMode: 'contain', 
        marginTop: 10,
        left:20
    },

    textProblems: {
        textAlign: 'center',
        alignItems:'center',
        right: -3,
        marginTop: 10,
        color: '#ffffff',
        textDecorationLine: 'underline'
    },
    
    imageMore: {
        left: 20, 
        width: 25, 
        height: 25, 
        resizeMode: 'contain', 
        marginTop: 10,
        left:-12
    },

    viewCameraFunction: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#e4e0d8', 
        height: 550
    },

    viewReminder: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#e4e0d8', 
        height: 100,
        backgroundColor:'#222222'
    },

    textReminder:{
        fontFamily: 'Arial',
        color:'#58c0a9',
        fontSize: 18, 
    }
    
})

export default ImageInputPage;