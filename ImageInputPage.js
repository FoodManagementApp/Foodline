import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';
import TextInputPage from './TextInputPage';
import MainPage from './MainPage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


class ImageInputPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            codeId: '',
            name: ' ',
            imageUrl: ' ',
            page: '2'
        }
    }

    onSuccess = e => {

        // code id
        this.setState(
            {
                codeId : e.data,
            }



        )

        const url = `https://world.openfoodfacts.org/api/v2/product/${e.data}.json`
        fetch(url, {
            method: 'GET',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               UserAgent: 'FoodManagementApp/1.0 (Android)'
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                name : responseData.product.generic_name_en,
                imageUrl : responseData.product.image_url
            })
        });
      
    };


    backPress = () => {
        alert("name: " + this.state.name + " id: " + this.state.codeId)
        this.setState( 
            {
                page: '0'
            }
        )
    }


    render() {
        if (this.state.page === '1') {
            return (<TextInputPage></TextInputPage>)
        } else if (this.state.page === '0') {
            return (<MainPage></MainPage>)
        } else {
            return (

                <View style={{ backgroundColor: '#222222' }}>
                    <View style={[styles.flexs, { height: 80 }]}>
                        <TouchableOpacity onPress={this.backPress}>
                            <Image style={[styles.imageBack]} source={require('./src/img/png/返回.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={[styles.textProblems]}>Any Problems?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={[styles.imageMore]} source={require('./src/img/png/更多.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewCameraFunction]}>
                        <QRCodeScanner
                            onRead={this.onSuccess}
                            flashMode={RNCamera.Constants.FlashMode.auto}
                        />
                    </View>

                    <View style={[styles.viewReminder]}>
                        <Text style={[styles.textReminder]}>Please scan the barcode</Text>
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
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },

    imageBack: {
        left: 20,
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 10,
        left: 20
    },

    textBold: {
        fontWeight: '500',
        color: '#000'
    },

    textProblems: {
        textAlign: 'center',
        alignItems: 'center',
        right: -3,
        marginTop: 10,
        color: '#ffffff',
        textDecorationLine: 'underline'
    },

    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },

    imageMore: {
        left: 20,
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 10,
        left: -12
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
        backgroundColor: '#222222'
    },

    textReminder: {
        fontFamily: 'Arial',
        color: '#58c0a9',
        fontSize: 18,
    },

    buttonTouchable: {
        padding: 16
    }

});

export default ImageInputPage;