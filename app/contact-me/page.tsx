import ContactForm from "@/components/ContactFrom";
import React from "react";

const Page = () => {
  return (
    <div

      className="w-screen h-screen bg-cover bg-center flex items-center justify-center bg-gradient-to-t  from-black  to-very-dark-purple"
    >
      <div
        style={{ backgroundImage: "url(react.jpg" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className=" flex justify-center items-center h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;