import React from 'react';
import MainPage from './MainPage';
export const MainContext = React.createContext({});

function App() {
  const [state, setState] = React.useState(
    { foodList:[], page: "0", codeId: undefined, name: " ", imageUrl: " "},
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