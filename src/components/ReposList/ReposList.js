import React, { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import EmptyList from '../EmptyList/EmptyList';
import './ReposList.scss';

const ReposList = ({ data }) => {
   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 4;

   useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
      
   }, [itemOffset, itemsPerPage, data]);

   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;

      setItemOffset(newOffset);
   };
   if (currentItems.length <= 0) {
      return <EmptyList/>
   }

   const items = currentItems.map((item) => {
      const { id, name, html_url, description, } = item;

      return (
         <li className='repos-info__item' key={id}>
            <a href={html_url} className="repos-info__link" target="blank">{name}</a>
            <div className="repos-info__descript">{description}</div>
         </li>
      )
   });

   return (
      <>
         <ul className="repos-info__list">
            {items}
         </ul>
         <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'pagination__item'}
            pageLinkClassName={'pagination__link'}
            previousClassName={'pagination__item'}
            previousLinkName={'pagination__link'}
            nextClassName={'pagination__item'}
            nextLinkClassName={'pagination__link'}
            breackClassName={'pagination__item'}
            breackLinkClassName={'pagination__link'}
            activeClassName={'active'}
            breakLinkClassName={'pagination__breack' }
         />
      </>
   );
};

export default ReposList;