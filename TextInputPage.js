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
import App from './App';

class TextInputPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: '1'
        }
    }

    backPress = () => {
        this.setState(
            {
                page: '0'
            }
        )
    }

    render() {
        if (this.state.page === '1') {
            return (
                <ScrollView>
                    <View style={[styles.flexs, { alignItems: 'center', height: 80 }]}>
                        <TouchableOpacity onPress={this.backPress}>
                            <Image style={{ left: 20, width: 25, height: 25, resizeMode: 'contain', marginTop: 10 }} source={require('./src/img/png/返回-黑.png')}></Image>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <Image style={{right:20, width: 25, height: 25, resizeMode: 'contain', marginTop: 10}} source={require('./src/img/png/增加添加加号.png')}></Image>
                      </TouchableOpacity> */}
                    </View>

                    <View style={[styles.UIBackground, { height: 60 }]}>
                        <Text style={{ top: 30, fontSize: 15 }}>Type the code on the food</Text>
                    </View>

                    <View style={[styles.input1, { height: 120 }]}>
                        <TextInput style={{ borderStyle: 'solid', borderWidth: 2.5, height: 35, width: 300, borderRadius: 9, borderColor: '#f2f2f2', fontSize: 10, color: '#58c0a9' }}></TextInput>
                    </View>

                    <View style={[styles.UIBackground, { height: 100 }]}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, color: '#333333', marginTop: 10 }}>Or</Text>
                        <Text style={{ top: 30, fontSize: 15 }}>Type the information of the food</Text>
                    </View>

                    <View style={[styles.flexs, { height: 50 }]}>
                        <Text style={{ left: 20, fontWeight: 'bold', textAlign: 'center', fontSize: 15, color: '#333333', marginTop: 10 }}>name</Text>
                        <TextInput style={{ right: 20, borderStyle: 'solid', borderWidth: 2.5, height: 35, width: 178, borderRadius: 9, borderColor: '#f2f2f2', fontSize: 10, color: '#58c0a9', marginTop: 10 }}></TextInput>
                    </View>
                    <View style={[styles.flexs, { height: 50 }]}>
                        <Text style={{ left: 20, fontWeight: 'bold', textAlign: 'center', fontSize: 15, color: '#333333', marginTop: 7.5 }}>best before date</Text>
                        <TextInput style={{ right: -20, borderStyle: 'solid', borderWidth: 2.5, height: 35, width: 50, borderRadius: 9, borderColor: '#f2f2f2', fontSize: 10, color: '#58c0a9', marginTop: 7.5 }}></TextInput>
                        <TextInput style={{ right: 0, borderStyle: 'solid', borderWidth: 2.5, height: 35, width: 50, borderRadius: 9, borderColor: '#f2f2f2', fontSize: 10, color: '#58c0a9', marginTop: 7.5 }}></TextInput>
                        <TextInput style={{ right: 20, borderStyle: 'solid', borderWidth: 2.5, height: 35, width: 50, borderRadius: 9, borderColor: '#f2f2f2', fontSize: 10, color: '#58c0a9', marginTop: 7.5 }}></TextInput>
                    </View>
                    <View style={[styles.flexs, { height: 50 }]}>
                        <Text style={{ left: 20, fontWeight: 'bold', textAlign: 'center', fontSize: 15, color: '#333333', marginTop: 3 }}>remark</Text>
                        <TextInput style={{ right: 20, borderStyle: 'solid', borderWidth: 2.5, height: 35, width: 178, borderRadius: 9, borderColor: '#f2f2f2', fontSize: 10, color: '#58c0a9', marginTop: 3 }}></TextInput>
                    </View>

                    <View style={[styles.Button]}>
                        <Button
                            title="add"
                            color="#58c0a9"
                            onPress={this.backPress}
                        />
                    </View>
                </ScrollView>
            )
        } else {
            return (
                <App></App>
            )
        }


    }


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

    input1: {
        height: 50,
        width: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },


    FoodList: {
        height: 420
    },

    TitleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    }

})


export default TextInputPage;