import React from 'react'
import Image from 'next/image'
import nextwatch_logo from '../../public/nextwatch_logo.png'
const Header = () => {
  return (
    <div className="absolute bg-linear-to-b from-black w-full p-4">
      <Image src={nextwatch_logo} alt="NextWatch Logo " width={320} height={120} />
    </div>
  )
}

export default Header
