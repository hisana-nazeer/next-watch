"use client";

import Header from "../components/Header";
import { useState } from "react";
import { auth, db } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {useSelector } from "react-redux";

export default function Page() {
 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


    



  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save / update user in Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: user.displayName??"",
          email: user.email??"",
          photoURL: user.photoURL??"",
          provider: "google",
          lastLoginAt: serverTimestamp(),
        },
        { merge: true }
      );

      // router.push("/home") — add later
   console.log("user got loggedin") } 
   catch (error: any) {
      setErrorMessage(error.message);
    } 
    finally{
      setLoading(false);
    }
  };
   const user = useSelector((state: any) => state.user);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="w-full max-w-md mx-auto mt-40 rounded bg-black/75 shadow-lg p-8 md:p-10 text-white">
        <h1 className="mb-8 py-20 text-center text-3xl font-semibold">
          Welcome to NextWatch
        </h1>

        <button
          onClick={handleGoogleLogin}
          disabled={loading||!!user}
          className="w-full rounded bg-white text-black py-3 text-lg font-semibold hover:bg-gray-200 transition disabled:opacity-60"
        >
          {user?
          "Signed in": loading ? "Signing in..." : "Continue with Google"}
        </button>

        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

























// import Header from "../components/Header";
// import { useRef, useState } from "react";
// import { checkValidData } from "../utils/validate";
// import { auth } from "../utils/firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// export default function Page() {
//   const [showSignUp, setShowSignUp] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const email = useRef<HTMLInputElement | null>(null);
//   const password = useRef<HTMLInputElement | null>(null);

//   const toggleSignUpForm = () => {
//     setShowSignUp(!showSignUp);
//     setErrorMessage(null);
//   };

//   const handleButtonClick = () => {
//     if (!email.current || !password.current) return;

//     const message = checkValidData(
//       email.current.value,
//       password.current.value
//     );
//     setErrorMessage(message);
//   };

//   // 🔥 GOOGLE LOGIN
//   const handleGoogleLogin = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);

//       console.log("Google user:", result.user);
//       // redirect / store user / call backend if needed
//     } catch (error: any) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />

//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="w-full max-w-md mx-auto mt-20 rounded bg-black/75 shadow-lg p-8 md:p-10 text-white"
//       >
//         <h1 className="mb-6 pt-20 text-center text-3xl font-semibold">
//           {showSignUp ? "Sign Up" : "Sign In"}
//         </h1>

//         {showSignUp && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full mb-4 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
//           />
//         )}

//         <input
//           ref={email}
//           type="text"
//           placeholder="Email address"
//           className="w-full mb-4 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
//         />

//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
//         />

//         <button
//           onClick={handleButtonClick}
//           className="w-full rounded bg-orange-500 py-3 text-lg font-semibold hover:bg-orange-600 transition"
//         >
//           {showSignUp ? "Sign Up" : "Sign In"}
//         </button>

//         {/* GOOGLE LOGIN */}
//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="mt-4 w-full rounded bg-white text-black py-3 text-lg font-semibold hover:bg-gray-200 transition"
//         >
//           Continue with Google
//         </button>

//         {errorMessage && (
//           <p className="text-red-500 p-4 text-center">{errorMessage}</p>
//         )}
//       </form>

//       <p
//         className="cursor-pointer p-10 mx-20 text-center"
//         onClick={toggleSignUpForm}
//       >
//         {showSignUp
//           ? "Already registered? Sign In"
//           : "New to NextWatch? Sign Up now"}
//       </p>
//     </div>
//   );
// }
