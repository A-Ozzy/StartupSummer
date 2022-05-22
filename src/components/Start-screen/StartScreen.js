import React from 'react';
import searchIcon from '../../images/search.svg';

import './StartScreen.scss';

const StartScreen = () => {
   return (
      <div className="start-screen">
         <div className="start-screen__content">
            <div className="start-screen__icon">
               <img className="start-screen__img" src={searchIcon} alt="icon" />              
               <div className="start-screen__text">Start with searching <br/>a GitHub user</div>
            </div>
         </div>
      </div>
   );
};

export default StartScreen;