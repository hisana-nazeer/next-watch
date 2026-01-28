import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import{ useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '../utils/firebase';
const AuthProvider = () => {
// const auth= getAuth();
  const dispatch= useDispatch();
  const router= useRouter();

  useEffect(()=>{
  onAuthStateChanged(auth, (user)=>
  {
    if(user){
      const {uid, email, displayName}= user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName}))
      router.push("/browse")
      console.log("User is signed in" );
    }
    else{
      // User is signed out
      dispatch(removeUser(null))
      router.push('/')

    }
  })
  },[])
}
export default AuthProvider;