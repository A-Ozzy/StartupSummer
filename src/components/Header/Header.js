
import gitIcon from '../../images/gitImg.png';
import searchIcon from '../../images/search.svg';

import './Header.scss';

const Header = (props) => {

   const { username, getData } = props;
   
   const onEnterPress = (e) => {
      if (e.key === "Enter") {
         getData(e.target.value);
         
      }
   };

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