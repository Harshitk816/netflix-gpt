import React from 'react'
import { useSelector }  from "react-redux";
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

    if(!movies) return; //early return. If movies is null then do not render anything

    const mainMovie = movies[0];
     const {original_title, overview, id} =  mainMovie;
 return (
    <div>
        <VideoTitle title ={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
        
    </div>
  )
}

export default MainContainer
