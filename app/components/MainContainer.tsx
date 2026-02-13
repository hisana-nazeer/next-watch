"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../redux/features/moviesSlice'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  
  const movies = useSelector((store: any) => store.movies.nowPlayingMovies)
   if(!movies) return;

   const bgMovie= movies[0]
   console.log("bg movie ", bgMovie)
  
   //extract details from bg movie
  const {original_title, overview, id} =bgMovie;

  

  
  return (
    <div>
      <VideoTitle title={original_title} overview = {overview}/>
      <VideoBackground movieId = {id}/>
    
    </div>
  )
}

export default MainContainer
