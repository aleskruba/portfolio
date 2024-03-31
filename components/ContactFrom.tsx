"use client"
import React, { useEffect } from "react";
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';



const ContactForm = ({animationDone}:any) => {


return (
<div className={`flex flex-col justify-center items-baseline  md:bg-transparent px-4 mx-2 md:mx-0 text-xl md:text-2xl lg:text-3xl mb-2 text-yellow-500 font-normal ${!animationDone ? 'border border-solid border-white ' : ''} text-yellow-500 py-4 rounded-lg shadow-md`}>
      <div className="flex  items-center justify-around gap-8 ">
        <FaEnvelope className="mb-2" />
        <a href="mailto:aleskruba@seznam.cz" className="text-yellow-500 hover:text-yellow-400">aleskruba@seznam.cz</a>

      </div>
      <div className="flex  items-center justify-around gap-8 mt-2">
        <FaMobileAlt className=" mb-2" />
        <div className=" mb-2">+420 728 949 062</div>
      </div>

      <div className="mt-2 text-base font-light text-white ">
        Communication in Czech, English, Spanish.
      </div>
    </div>
  );
};

export default ContactForm;
