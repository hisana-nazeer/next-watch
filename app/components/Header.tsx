
import React from 'react'
import Image from 'next/image'
import nextwatch_logo from '../../public/nextwatch_logo.png'
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
const Header = () => {

  const router= useRouter();
    const handleSignOut=()=>{
      signOut(auth).then(()=>{
        console.log("User signed out successfully")
        router.push('/login')
      }).catch((error)=>{
        console.error("Error signing out:", error)
        router.push('/error')
      })

    }
    const user = useSelector((state: any) => state.user); 

  return (
    <>
    <div className="absolute bg-linear-to-b from-black z-10 w-full p-4 flex justify-between">
      <Image src={nextwatch_logo} alt="NextWatch Logo " className="w-44 h-20" />
   <div className=''>
    <img className=' w-10 h-7'
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAyQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EADYQAQACAQIEBAMGAwkAAAAAAAABAgMEEQUGEiExQVGRE2FxFDJSYqGxQoHRIiMkRHKCksHh/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECBAMFBv/EAB0RAQEAAgMBAQEAAAAAAAAAAAABAgMEESESMRT/2gAMAwEAAhEDEQA/AN8B+ZeIAAAAAAAAAAAAAAAAAAAAAAAAAAB9fBQYmYjzj6bpVynwDHq8P23W166TMxjxz4TtPeZTKulwRj+HGHHGPw6YrG3s7NXCyzx7tamPipBMeaeX8GLBfXaGkY5xxvkx17RMesfNDnPt05asvmpZ0APJAAAAAAAAAEh5W4FTidrajVVmdPSdorvt1T/R6a9d2ZfMWTtHZtWO02iJ+cs+W8eC28Ok0+Cnw8GHHSm221axEI/zJy5gzaa+o0OKuPPSJtNaRtF/5errz4OWOPcrXyggft5DhYAEAAACPEFm8s2rbgOi6PLFFZ29Y8f1dRXfLnMFuFf3OaJvprT1bR3mkz6eqVRzNwn4fX9qjw7x0zu+3o5GFwndess6b3Fr0pw7VWy/cjFbff6KqSLmTmOeIU+zaSLUwT3tafG/y+iOuDmbZsz8YyvYA42QAAAAAAABYXJNqTwOkUnvF7RMK9dbl/jWThGbbab6e+0Xpv8ArDp4uya9ndaxvVWZD4y2rWk2tO0RG8y4+LmfhWSnVOp6J/Das7uDzBzRXVYbabh/XFL9r5J7TMekPq7ORrmPfbdsRe01m1ppG1ZmZiPSN+zAPhX29vIAQAAAFABAAAAAAAAAAAAAAUAEAAAAAAAAAAAAABQHrpsGTU56YMNerJedqw7Op5U4jgwfEp8PLMeNKT3/APW8deeU7kHBH1el8dprelq2jxi0bTD5hi+foAIgAKAee3moDrcO5e4hr5iYwzixz/Hk7R7eKS4OTuH1w9OovkyZZj7/AFdMRPyh0a+LsznfSzG1BBtcT0k6DX59LNur4dton1jbf/tqvDKXG2VABkAAAAAAAAAAbvBtbXh/EsOpvXelJnq29J7LJ0Wv02uxfE0uWuSvnt4x9YVS9MGfLp8kZNPlvitHnSdnXx+VdPlnjUy6WhreF6LXx/itPjvPlbba0fzju4Gs5KwX3nSam9J8q5I6v1c7Qc4a3BEV1eOmor+L7tv6T7O7pubeGZtoy2vht+evb3h2ffH2/rXlR/PyhxPH9ycOX6W2/dq25a4vXx0kz9LRKeYeK8Pzd8erwzv+eGxGo08x2zY9v9UF4mnL2U+YruvLXF7f5SY+tobWHlDiV9vi/Cxx87b/ALJ19p08eOfH/wA4a+bi3D8MTOTV4a/74k/j0T9p8xH9LyTijadXq7W/Lir0/rLu6HgnD9BETp9NTqj+O39q3vLR1HNnDMO8Y73zT5dFe3u4us5z1WTeuj09MUfivPVPt4L98bV+HkTW+THipN8l4pWPGZnaIR3inNukwb00cfaMu07T4V90N1ev1Wtt1avPfLPpae3s1nPs51vmMS5vXVajJq9Rk1Ge3VkyTvZ5A4LbfawAIAAAAAAAAAAAAAADO8+s+7A1KnbMzM+MywCd1QBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="/>
   </div>
   
    
   <div className="absolute top-4 right-4">

    <div className="">
      {user?.displayName}
    </div>
    <button onClick={handleSignOut} className='p-10 font-bold text-amber-50 cursor-pointer' >
    SignOut

    </button>
   
    
    </div>
    </div>
    </>

  )
}

export default Header
