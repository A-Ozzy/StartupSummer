import React from 'react';
import userhIcon from '../../images/user.svg';
import './NotFoundScreen.scss';

const NotFoundScreen = () => {
   return (
      <div className="not-found">
         <div className="not-found__content">
            <div className="not-found__icon">
               <img className="not-found__img" src={userhIcon} alt="icon" />
               <div className="not-found__text">User not found</div>
            </div>
         </div>
      </div>
   );
};

export default NotFoundScreen;