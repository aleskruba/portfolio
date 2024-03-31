"use client"

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import { useThemeContext } from "@/context/theme-context";
//import Transition from "./Transition";

function Navigation() {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");
   
    const [lastScroll, setLastScroll] = useState(0);
     const {hideHeader,setHideHeader} = useThemeContext()



    useEffect(() => {
      const container = document.getElementById('main');
  
      if (!container) {
        return; // Return if the container element is not found
      }
  
      const handleScroll = () => {
 
        const currentScroll = container.scrollTop;
  
        if (lastScroll < currentScroll) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
  
        setLastScroll(currentScroll); // Update lastScroll with the current scroll value
      };
  
      container.addEventListener('scroll', handleScroll);
  
      return () => container.removeEventListener('scroll', handleScroll);
    }, [lastScroll,hideHeader,path,prevPath,isRouting]);
  
    useEffect(() => {
        if (prevPath !== path) {
            setisRouting(true)
        }
    },[path,prevPath])


  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      setHideHeader(false)
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
    style={{ left: "25%" }}
    className="absolute z-[50] bottom-0 w-[50%] md:w-[50%] max-h-[150px] rounded-md flex justify-between items-center border bg-black-500 border-white px-4 py-7"
  >

  {/*   {isRouting && <Transition />} */}
    {NavLinks.map((nav) => (
      <Link key={nav.name} href={nav.link}     className="mb-0 md:ml-0 md:pl-4 md:w-[50%]  relative">

      <div className="absolute w-[100px] h-[44px] left-[-10px] bottom-1 opacity-0 md:text-gray-400 md:hover:opacity-100">{nav.alt}
      </div>
        <nav.icon
          className={`w-[24px] h-[24px] hover:text-purple-800  ${
            path === nav.name ? "text-purple-800" : "text-white"
          }`}
        />

      </Link>
    ))}
  </div>
  )
}

export default Navigation