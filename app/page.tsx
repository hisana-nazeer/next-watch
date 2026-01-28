"use client";
import Image from "next/image";
import Body from "./components/Body";
import Header from "./components/Header";

import appStore from "./redux/appStore"

export default function Home() {
  return (
   
      <main>
        
        <Header />
       
        <Body />
         </main>
      

    
       
     
   
  );
}
