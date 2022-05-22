import React, { useEffect } from 'react';
import gitIcon from '../../images/gitImg.png';
import searchIcon from '../../images/search.svg';
import { useState } from 'react';

import './Header.scss';

const Header = () => {
   const [username, setUsername] = useState('');
   const [data, setData] = useState([]);

   const getData = (name) => {
      setUsername(name);

      fetch(`https://api.github.com/users/${name}`)
         .then(res => res.json())
         .then((result) => {
            setData(result);
            
         });
      
   };

   const onEnterPress = (e) => {
      if (e.key === "Enter") {
         getData(e.target.value);
      }
   };

   useEffect(() => {
      console.log(data);

   }, [data]);

   return (
      <div className='header'>
         <div className="header__box">
            <div className="header__item">
               <img className="header__icon" src={gitIcon} alt="icon" />
            </div>
            <div className="header__item header-input">
               <img className="header-input__icon" src={searchIcon} alt="icon" />
               <input type="text"
                  className="header-input__input"
                  placeholder="Enter GitHub username"
                  defaultValue={username}
                  onKeyPress={onEnterPress}
               />
            </div>

         </div>
      </div>
   );
};

export default Header; 