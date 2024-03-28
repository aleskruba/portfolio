"use client"
import React,{useEffect,useState} from 'react'
import Image from "next/image";
import { Socials } from '@/constants';
import Link from 'next/link'
import { useThemeContext } from '@/context/theme-context';


const Navbar = () => {


  const {hideHeader} = useThemeContext()

  useEffect(() => {

    console.log('navbar',hideHeader)
  },[])

    return (
        <div   style={{ display: hideHeader ? 'none' : '' }} className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
          <div className="flex flex-row gap-3 items-center">
          <div className="relative w-[80px] h-[80px]  overflow-hidden ">
          <Link
              href="/">             
              <Image
                src="/Ales.png"
                alt="logo"
                width={80}
                height={80}
                className="object-cover w-full h-full rounded-full"
              />
              </Link>
 
            </div>

            <h1 className="text-white text-[25px] font-semibold">
              Ales Kruba{" "}
       {/*        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                Dev{" "}
              </span> */}
            </h1>
          </div>
    
          <div className="flex flex-row gap-5 mb-2">
  {/*           {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
              />
            ))} */}
          </div>
        </div>
      );
    };
export default Navbar