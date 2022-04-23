import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { MainContext } from './App';

const ImageInputPage = () => {

    const mc = React.useContext(MainContext);

    const onSuccess = e => {
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
            if(responseData.status_verbose == "product not found"){
                Alert.alert (
                    "Product Not Found", 
                    "\nPlease enter food details manually.",
                    [
                        {
                            text: "OK",
                            onPress: mc.setState({
                                foodList: mc.state.foodList,
                                page: '1'
                            }),
                        },
                    ],
                )
            }else{
                mc.setState(
                    {
                        foodList: mc.state.foodList,
                        codeId: e.data,
                        page: '1',
                        name: responseData.product.product_name,
                        imageUrl: responseData.product.image_url
                    }
                )
            }
        });

    };

    const backPress = () => {
        mc.setState(
            {
                foodList: mc.state.foodList,
                page: '0'
            }
        )
    }

    const textPress = () => {
        mc.setState(
            {
                foodList: mc.state.foodList,
                page: '1'
            }
        )
    }

        return (

            <View style={{ backgroundColor: '#222222' }}>
                <View style={[styles.flexs, { height: 100 }]}>
                    <TouchableOpacity onPress={backPress}>
                        <Image style={[styles.imageBack]} source={require('./src/img/png/back.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={textPress}>
                        <Text style={[styles.textProblems]}>Any Problems?</Text>
                    </TouchableOpacity>

                    <Text>"  "</Text>
                </View>

                <View style={[styles.viewCameraFunction]}>
                    <QRCodeScanner
                        onRead={onSuccess}
                        flashMode={RNCamera.Constants.FlashMode.auto}
                    />
                </View>

                <View style={[styles.viewReminder]}>
                    <Text style={[styles.textReminder]}>Please scan the barcode</Text>
                </View>
            </View>




        )
    
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
        textDecorationLine: 'underline',
        width: 300
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
        backgroundColor: '#ffffff',
        height: 480,
        padding: 0
    },

    viewReminder: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
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