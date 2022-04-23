import React, {useEffect} from 'react';
import {
    Text,
} from 'react-native';
import { MainContext } from './App';
import {storage} from './storage'


const StoreLoader = () => {
    const mc = React.useContext(MainContext);
    const pageSwicher = () => {
        mc.setState({ foodList: [], page: "0"})
      }

    //componentDidMount
    useEffect(() => {
        storage.load('foodListInStorage', pageSwicher, (data) => {
            mc.setState({ foodList: data==undefined?[]:data, page: "0"})
          })
      }, []);



    return(
        <Text style={{ textAlign: 'center' }}>loading...</Text>
    )

}

export default StoreLoader;