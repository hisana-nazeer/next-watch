"use client";
import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/features/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';

const page = () => {
    useNowPlayingMovies();

    //main container - movie video, title
    //secondary container- movie list
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
      browse page
    </div>
  )
}

export default page
