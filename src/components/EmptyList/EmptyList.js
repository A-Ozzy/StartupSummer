import React from 'react';
import crossIcon from '../../images/cross.svg';
import './EmptyList.scss';

const EmptyList = () => {
   return (
      <div className="empty">
         <div className="empty__content">
            <div className="empty__icon">
               <img className="empty__img" src={crossIcon} alt="icon" />              
               <div className="empty__text">Repository list is empty</div>
            </div>
            
         </div>
      </div>
   );
};

export default EmptyList;