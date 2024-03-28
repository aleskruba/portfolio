import React from "react";
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="flex  flex-col justify-center items-baseline bg-gray-800  md:bg-transparent px-2 text-xl md:text-2xl lg:text-3xl mb-2  text-yellow-500 font-normal border border-solid border-gold-500 text-gold-500 py-4  rounded-lg shadow-md">
      <div className="flex  items-center justify-around gap-8 ">
        <FaEnvelope className="mb-2" />
        <a href="mailto:aleskruba@seznam.cz" className="text-gold-500 hover:text-yellow-400">aleskruba@seznam.cz</a>

      </div>
      <div className="flex  items-center justify-around gap-8 mt-2">
        <FaMobileAlt className=" mb-2" />
        <div className=" mb-2">+420 728 949 062</div>
      </div>

      <div className="mt-2 text-base font-light text-white ">
        Communication in Czech, English, and Spanish.
      </div>
    </div>
  );
};

export default ContactForm;
