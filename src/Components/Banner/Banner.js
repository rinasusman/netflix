import React, { useEffect, useState } from 'react';
import { API_KEY,imageUrl } from '../../constants/constants';
import axios from '../../axios';

import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
 
  // trending/all/week?api_key=${API_KEY}&language=en-US
  useEffect(() => {
    axios.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml`)
      .then((response) => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        console.log(results[randomIndex]);
        setMovie(results[randomIndex]);
      });
  }, []);
  

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path:""})`}} className='banner'>
      <div className='content'>
     
      <h1 className='title'>{movie ? movie.title: ""}</h1>
    
       
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <div  className='fade_left' ></div>
        <h1 className='discription'>{movie ? movie.overview :""}</h1>
      
      </div>
      <div  className='fade_bottom' ></div>
    </div>
  )
}

export default Banner
