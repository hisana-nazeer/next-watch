import React from 'react'

interface VideoTitleProps {
  title: string
  overview: string
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {

  return (
    <div className='absolute text-white bg-gradient-to-right from-black'>
       <h1 className='pt-36 px-12 font-bold text-3xl text-shadow-2xs'>{title}</h1>
       <p className='pt-10 px-12 w-1/4'>{overview}</p> 
       <div className='pt-36 px-12 '>
        <button className='bg-gray-500 bg-opacity-50 rounded-lg text-white px-10 mx-5 h-12'>Play</button>
        <button className='bg-gray-500 bg-opacity-50 rounded-lg text-white px-10 mx-5 h-13'>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
