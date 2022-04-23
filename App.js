import React from 'react';
import MainPage from './MainPage';
export const MainContext = React.createContext({});
import SplashScreen from 'react-native-splash-screen';



function App() {

  SplashScreen.hide()

  const [state, setState] = React.useState(
    { foodList: [], page: "-1", codeId: undefined, name: " ", imageUrl: ' ', sortCode: 2 },
  );

  
  return (

    <MainContext.Provider value={{
      state,
      setState,
    }}>
      <MainPage></MainPage>
    </MainContext.Provider>
  )

}






export default App;