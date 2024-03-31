"use client";
import React,{useEffect,useState,useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useRouter } from 'next/navigation';

const Page = () => {
  
    

  return (

      <div id='main' style={{height:'100vh'}}
   
      className="h-screen w-screen flex flex-col items-center custom-scrollbar justify-start bg-cover bg-center overflow-y-auto bg-gradient-to-t from-black to-very-dark-purple scrollbar-hide"
    >
    {/*   <div className="fixed h-[100px] w-full bg-black z-[20]"></div> */}
      <div className="flex flex-col gap-2 max-w-[80%] max-h-[80vh] text-center items-center ">
        <div className="flex flex-col mt-24 md:mt-26 items-center gap-4 ">
          <h1 className="font-thin text-white  text-[30px] md:text-[50px]">

            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
 
        </div >
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
       {/*  <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      <div  className=" max-w-[100%] md:ml-44 md:flex  ">
 
          <div className="p-4 min-w-[350px] text-white md:flex md:flex-col md:items-start ">
  <h1 className="text-xl font-bold mb-2">Frontend</h1>
  <ul className="list-disc pl-6">
    <li className="mb-4">
      Node.js
      <ul className="list-disc pl-6">
        <li className="ml-4">Vanilla JavaScript and EJS</li>
      </ul>
    </li>
    <li className="mb-4">
      React.js 
      <ul className="list-disc pl-6">
        <li><ul>
           state managment with
        </ul>
        </li>
        <li className="ml-4">useState</li>
        <li className="ml-4">useReducer</li>
        <li className="ml-4">useContext</li>

      </ul>
    </li>
    <li className="mb-4">
    Next.js 

    </li>
  </ul>
  <h1 className="text-xl font-bold mb-2">Backend</h1>
  <ul className="list-disc pl-6">
    <li className="mb-4">
      Node.js
      <ul className="list-disc pl-6">
        <li className="ml-4">Express</li>
      </ul>
    </li>
    <li className="mb-4">MySQL</li>
    <li className="mb-4">MongoDB</li>
    <li className="mb-4">Redis</li>
   </ul>
   <h1 className="text-xl font-bold mb-2">Other Skills</h1>
        <ul className="list-disc pl-6">
           <li className="mb-4">Query language GraphQL</li>
           <li className="mb-4">Work in GIT</li>
           <li className="mb-4">Docker</li>
           <li className="mb-4">TypeScript</li>
        </ul>
</div>


<div className=" flex rounded-xl shadow-md p-5 max-w-[100%] text-white ">

  <div>
    <div className="text-xl text-yellow-400 ">Let me share where I stand in programming :</div>
    <p className="mt-10 font-thin ">
      <strong className="text-xl text-yellow-400">React and Next.js: </strong>
As an amateur programmer, I've created applications using state manegment tools like useState, useEffect, useReducer, and useContext to manage states. I'm familiar with working with components and passing props through them. I feel comfortable setting up routes using the react-router-dom package, including managing parameters. I'm capable of sending data to a backend server for processing and   retrieving data from APIs and handling their responses. Additionaly I've used UI interactions and transitions by using libraries such as Headless UI and Frame Motion. 

    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Express.js:</strong> In the Express framework, I have experiences connecting the server to a database and setting up routes for handling GET, POST, PUT, DELETE methods.  I am able to create authentication servers for login, registration, update, change password and other related functionalities, i can also create and use middleware functions for authorization purposes.
      I've also worked on implementing functionality for JWT tokens to create httpOnly cookies in order to have the authenticaton processes more secure.</p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Databases:</strong> I've used MySQL and MongoDB. In MySQL, I can create simple tables that relate to each other. With MongoDB, I'm gaining proficiency in creating basic data structures while continuously learning about managing relationships.
    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Redis:</strong> I am familiar... .    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Prisma:</strong> I've been using Prisma in some of my React projects to simplify database management. 
    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">TypeScript:</strong> Last year, I began my journey with TypeScript. I'm enthusiastic about its ability to enhance code robustness and comprehension.
    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">GraphQL:</strong> Currently, I've been exploring GraphQL . 
    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Docker:</strong> I am familiar... . 
    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Work in Git and Github:</strong> I am familiar... . 
    </p>
    <p className="mt-10 font-thin">
      <strong className="text-xl text-yellow-400">Styles :</strong> I have experience using classic CSS or Tailwind . I know how to work with both Flexbox and Grid to create responsive and dynamic layouts. 
    </p>
    <div className="h-[200px]">

    </div>
  </div>
</div>


        </div>
    </div>
  

  );
};

export default Page;