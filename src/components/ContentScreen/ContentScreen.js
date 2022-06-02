import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import ErrorIndicator from '../error-indicator';
import ReposList from '../ReposList';
import './ContentScreen.scss';


const ContentScreen = ({ data }) => {

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
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
      setLoading(true);
      fetch(`${repos_url}`)
         .then(res => res.json())
         .then((result) => {
            setRepos(result);
            setLoading(false);
         })
         .catch((err) => {
            setError(true);
            console.log(err);
         });
      setLoading(false);
      setError(false);
   }, [repos_url]);


   if (loading) {
      return <Spinner />
   }
   if (error) {
      return <ErrorIndicator />
   }

   return (
      <div className='content'>
         <div className="content__box">
            <div className="content__item user-info">
               <div className="user-info__box">
                  <div className="user-info__photo">
                     <img src={avatar_url} alt="photo" />
                  </div>
                  <div className="user-info__content">
                     <div className="user-info__name">{name}</div>
                     <a href={html_url} target="_blank" className="user-info__login">{login}</a>
                     <div className="user-info__pannel user-pannel">
                        <div className="user-pannel__followers">{followers} followers</div>
                        <div className="user-pannel__following">{following} following</div>
                     </div>
                  </div>


               </div>
            </div>
            <div className="content__item repos-info">
               <h2 className="content__repos">Repositories ({repos.length})</h2>
               <ReposList data={repos} />
            </div>
         </div>

      </div>
   );
};

export default ContentScreen;