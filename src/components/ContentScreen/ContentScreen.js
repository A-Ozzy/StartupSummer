import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './ContentScreen.scss';


const ContentScreen = ({ data }) => {
   const [repos, setRepos] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [reposPerPage] = useState(4);
   

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
         });

   }, [repos_url]);

   const items = repos.map((item) => {
      const { id, name, html_url, description, } = item;

      return (
         <li className='repos-info__item' key={id}>
            <a href={html_url} className="repos-info__link" target="_blank">{name}</a>
            <div className="repos-info__descript">{description}</div>
         </li>
      )
   });

   const handlePageClick = (data) => {
      console.log(data.selected);

   }

   const lastReposIndex = currentPage * reposPerPage;
   const firstReposIndex = lastReposIndex - reposPerPage;
   
   const currentRepo = repos.slice(firstReposIndex, lastReposIndex);
console.log(currentRepo);
    

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
               <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  breakLabel={'...'}
                  pageCount={repos.length}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  pageClassName={'pagination__item'}
                  pageLinkClassName={'pagination__link'}
                  previousClassName={'pagination__item'}
                  previousLinkName={'pagination__link'}
                  naxtClassName={'pagination__item'}
                  nextLinkClassName={'pagination__link'}
                  breackClassName={'pagination__item'}
                  breackLinkClassName={'pagination__link'}
                  activeClassName={'active'}
               />
            </div>
         </div>

      </div>
   );
};

export default ContentScreen;