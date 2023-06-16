/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ____Jiaheng Wang______ Student ID: ____180562217_____ Date: ____June 15, 2023______
*
*
********************************************************************************/ 

import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '@/pages/components/MovieDetails';
import PageHeader from '@/pages/components/PageHeader';


export default function Home() {
   const [page, setPage] = useState(1);
   const [pageData, setPageData] = useState([]);

   const fetcher = (url) => fetch(url).then((res) => res.json());

   const { data, error } = useSWR(`https://zany-teal-indri-coat.cyclic.app/api/movies?page=${page}&perPage=10`, fetcher);

   useEffect(() => {
      if (data) {
         setPageData(data);
      }
   }, [data]);

   function previous() {
      if (page > 1) {
         setPage(page - 1);
      }
   }

   function next() {
      setPage(page + 1);
   }

   console.log(pageData);

   let items = [];

   pageData.forEach((movie) => {
      items.push(
         <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
               <strong>{movie.title} </strong>  ({movie.year})
               Directors: {movie.directors.join(', ')};
            </Accordion.Header>
            <Accordion.Body>
               <MovieDetails movie={movie} />
            </Accordion.Body>
         </Accordion.Item>);
   });

   return (
      <>
         <PageHeader text="Film Collection : Sorted by Date" />
         <Accordion>
            {items}
         </Accordion>
         <Pagination>
            <Pagination.Prev onClick={previous} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={next} />
         </Pagination>
      </>
   );
}