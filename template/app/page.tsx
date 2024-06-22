'use client'

import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import IO from "@/components/IO";
import { useState } from "react";


export default function Home() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  const handleButtonClick = () => {
    setShowOtherComponent(true);
  };

  return (
    <>
      <Navbar projectName={'Edit Project Name'}/>
      {!showOtherComponent ? (
        <Hero 
        button={"EDIT BUTTON TEXT"} 
        heading={"This is the heading"} 
        subheading={"This is the subheading"} 
        onButtonClick={handleButtonClick}/>
      ) : (
        <IO />
      )}
    </>
    
  );
}
