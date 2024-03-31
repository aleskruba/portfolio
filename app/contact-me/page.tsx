"use client"
import { motion } from 'framer-motion';
import ContactForm from "@/components/ContactFrom";
import React,{useState} from "react";
import "./animations.css"; // Import the CSS file

const Page = () => {

  const [animationDone, setAnimationDone] = useState(false);

  const onAnimationComplete = () => {
    setAnimationDone(true);
  };

  return (
    <div className="w-screen h-screen overflow-y-auto custom-scrollbar   bg-cover bg-center flex items-center justify-center pt-4 bg-gradient-to-t  from-black  to-very-dark-purple">
      <div id='contact' className="h-[60%] w-[80%] relative bg-center rounded-xl border border-white">
        <motion.div className="flex justify-start items-start  pt-2 md:justify-center md:items-start md:mt-8 md:ml-8 h-full" 
                    initial={{ y: "0%" }} 
                    animate={{ y: "25%" }} 
                    transition={{ duration: 1.5 }}
                    onAnimationComplete={onAnimationComplete}>
          <ContactForm animationDone={animationDone} />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
