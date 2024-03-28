"use client"
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const aspectRatio = 1; // Calculate the actual aspect ratio here

    // Set the width and calculate the corresponding height based on the aspect ratio
    const width = 480; // Set the desired width
    const height = Math.round(width / aspectRatio);

    //{{backgroundImage:"url(/bg-img.webp"}}
  return (
    <main className='w-screen h-screen relative'>
<div className='flex items-center w-full h-full bg-cover bg-center bg-black md:bg-cover md:bg-center' style={{ backgroundImage: "url(/brnonight.jpg)" }}>
    <div className=' pl-2 md:pl-40 pb-36 md:pb-40 flex-col gap-5 z-[20]  md:[z-10] max-w-[750px]  bg-trasparent'>
   
      <p className='text-white z-[20] font-thin text-xl mb-4 '>
         Hey there! <span className='mt-10'> I'm Aleš, and I come from Brno. I started exploring web development back in 2018, initially with Python and its frameworks Flask and Django. From 2021 I started diving into <strong className='text-yellow-200'>JavaScript</strong>  and <strong className='text-yellow-200'>React js</strong>
         . At the same time I learned how to create a server and APIs using library <strong className='text-yellow-200'>Express</strong>  in Node js and connect it to a database. Additionally, I am familiar with PHP.  I can also create and utilize simple relationship tables in SQL databases and MongoDB.I am currently developing  websites in <strong className='text-yellow-200'>Next js</strong>.
          Despite being a bit further along in life, I'm excited about the idea of starting a career in IT.    
      </span></p>
      <div className="flex-col md:flex-row  md:mt-24 hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            ><div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-16  z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] hover:bg-gray hover:bg-gray-800"
        >
          My Skills
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] hover:bg-gray-800"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] hover:bg-gray-800"
        >
          Contact me
        </Link>
      </div>
      <div className="hidden md:block absolute bottom-0 right-0 z-[10]">
     {/*    <Image
          src="/kid.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
*/}
          <Image
            src="/cliff.webp"
            alt="cliff"
            width={width}
            height={height}
   
     
          />
    


 </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div> 

    <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
        
      /> 
      </main>
  )
}
