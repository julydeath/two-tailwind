import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
        className="w-full h-full object-cover"
        alt="beach"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-4xl font-bold">Find Your Special Trip</h1>
          <h2 className="italic py-4">with Manoj</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            cupiditate numquam quam at eos optio alias, deleniti sint
            repellendus hic nam quos nulla eveniet dolor. Obcaecati officiis
            dolorem ducimus ea!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
