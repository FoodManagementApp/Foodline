import React, {useEffect} from 'react';
import {
    Text,
} from 'react-native';
import { MainContext } from './App';
import {storage} from './storage'


const StoreLoader = () => {
    const mc = React.useContext(MainContext);
    //componentDidMount
    useEffect(() => {
        storage.load('foodListInStorage', (data) => {
            mc.setState({ foodList: data==undefined?[]:data, page: "0", codeId: undefined, name: " ", imageUrl: ' ' })
          })
      }, []);

    return(
        <Text style={{ textAlign: 'center' }}>loading...</Text>
    )

}

export default StoreLoader;