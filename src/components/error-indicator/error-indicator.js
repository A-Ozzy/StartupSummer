import React from "react";
import manIcon from '../../images/man.svg';
import './error-indicator.scss';


const ErrorIndicator = () => {

   return (
      <div className="not-found">
         <div className="not-found__content">
            <div className="not-found__icon">
               <img className="not-found__img" src={manIcon} alt="icon" />              
               <div className="not-found__text">User not found</div>
            </div>
         </div>
      </div>
   );
};

export default ErrorIndicator;