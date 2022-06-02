import React from 'react';
import Header from '../Header';
import StartScreen from '../Start-screen';
import NotFoundScreen from '../Not-found-screen';
import ContentScreen from '../ContentScreen';
import Spinner from '../Spinner';
import ErrorIndicator from '../error-indicator';
import { useState, useEffect } from 'react';

import './App.scss';



const App = () => {
   const [username, setUsername] = useState('');
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const getData = (name) => {
      setUsername(name);
      fetch(`https://api.github.com/users/${name}`)
         
         .then(res => res.json())
         .then((result) => {
            setData(result);
            setLoading(false);
            setUsername('');
         })
         .catch((error) => {
            setError(true);
            setLoading(false);
            console.log(error);
         });
      setUsername('');
      console.log(username);
      
   };


   const hasData = !(loading || error);
   
   const errorMessage = error ? <ErrorIndicator /> : null
   const spinner = loading ? <Spinner /> : null
   const startScreen = (hasData  && data.length <= 0) ? <StartScreen /> : null
   const content = !startScreen ? <ContentScreen data={data}/> : null


   return (
      <div className="App container">
         <Header username={username} getData={getData} />
         {errorMessage} 
         {spinner}
         {content}
         {startScreen}
         
      </div>
   );
};

export default App;
