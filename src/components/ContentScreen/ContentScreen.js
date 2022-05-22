import React from 'react';
import { useState, useEffect } from 'react';
import './ContentScreen.scss';


const ContentScreen = ({ data }) => {
   const [repos, setRepos] = useState([]);

   const {
      avatar_url,
      name,
      login,
      followers,
      following,
      html_url,
      repos_url
   } = data;

   useEffect(() => {
      
       fetch(`${repos_url}`)
         .then(res => res.json())
         .then((result) => {
            setRepos(result);
            
         })
         .catch((error) => {
           console.log('error');
         });
      
   }, [repos_url]);

   

   if (repos.length > 0) {
      console.log(repos);
   }

   const items = repos.map((item) => {
      const { id, name, html_url, description, } = item;
      
      return (
         <li className='repos-info__item' key={id}>
            <a href={html_url}className="repos-info__link" target="_blank">{name}</a>
            <div className="repos-info__descript">{description}</div>
         </li>
      )
   });
   
   return (
      <div className='content'>
         <div className="content__box">
            <div className="content__item user-info">
               <div className="user-info__box">
                  <div className="user-info__photo">
                     <img src={avatar_url} alt="photo" />
                  </div>
                  <div className="user-info__name">{name}</div>
                  <a href={html_url} target="_blank" className="user-info__login">{login}</a>
                  <div className="user-info__pannel user-pannel">
                     <div className="user-pannel__followers">{followers} followers</div>
                     <div className="user-pannel__following">{following} following</div>
                  </div>
               </div>
            </div>
            <div className="content__item">
               <h2 className="content__repos repos-info">Repositories ({repos.length})</h2>
               <ul className="repos-info__list">
                  {items}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default ContentScreen;