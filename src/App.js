import React from 'react'
import Body from "./components/Body";
import Login from './components/Login';
import Header from './components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
const App=()=> {
  return (
    <Provider store={appStore}>
    <div className="App">
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
