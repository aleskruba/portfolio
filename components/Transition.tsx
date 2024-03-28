"use client";
import React from "react";
import { motion } from "framer-motion";
import { Texts } from "@/constants";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",

  },
  animate: {
    y: "0%",
    height: "0%",
 },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],

  },
};

const Transition = () => {
  const randomIndex = Math.floor(Math.random() * Texts.length); // Generate a random index
  const randomText = Texts[randomIndex].text; // Get the text from the randomly selected index


  return (
    <div className="flex items-center justify-center ">

  <motion.div
        className="flex items-center justify-center flex-col fixed right-0 h-screen w-screen bottom-full  bg-gradient-to-t from-black  to-very-dark-purple"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.9, duration: 3 }}
        
      >  
      <h1 id="animatedText" className="text-2xl md:text-3xl text-white font-thin text-center animate-text-size"> 
          {randomText}
          </h1>
      </motion.div>
   
    </div>
  );
};

export default Transition;