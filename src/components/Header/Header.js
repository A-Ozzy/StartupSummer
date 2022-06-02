
import gitIcon from '../../images/gitImg.png';
import searchIcon from '../../images/search.svg';

import './Header.scss';

const Header = (props) => {

   const { onSubmit, onInputChange } = props;

 
   return (
      <div className='header'>
         <div className="header__box">
            <div className="header__item">
               <img className="header__icon" src={gitIcon} alt="icon" />
            </div>
            <div className="header__item header-input">
               <img className="header-input__icon" src={searchIcon} alt="icon" />

               <form onSubmit={onSubmit}>
                  <input type="text"
                     className="header-input__input"
                     placeholder="Enter GitHub username"
                     value={props.username}
                     onChange={onInputChange}
                  />
               </form>

            </div>

         </div>
      </div>
   );
};

export default Header; 