import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../redux/features/moviesSlice';
import useMovieTrailer from './useMovieTrailer';

interface VideoBackgroundProps {
  movieId: number | string;
}

const VideoBackground = ( {movieId}:VideoBackgroundProps) => {

  
const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo)
  useMovieTrailer(movieId);
  return (
    <div className='w-screen  '>
    <iframe className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/"+ trailerVideo?.key}
    allow="accelerometer; autoplay;
     clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>

    
    </div>
  )
}

export default VideoBackground
