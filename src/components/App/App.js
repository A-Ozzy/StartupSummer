import React from 'react';
import Header from '../Header';
import StartScreen from '../Start-screen';
import NotFoundScreen from '../Not-found-screen';

import { legacy_createStore as createStore } from "redux";
import reducer from '../reducer';

import './App.scss';

const store = createStore(reducer);

const App = () => {
   return (
      <div className="App container">
         <Header />
         {/* <StartScreen/> */}
         {/* <NotFoundScreen /> */}
         
      </div>
   );
};

export default App;
