import React from "react";

const Activity = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="p-4 relative">
        <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="resort"
          className="border-4 shadow-2xl hover:scale-105 duration-150"
        />
      </div>
      <div className="p-4 relative">
        <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Cruise
        </h3>
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1264&q=80"
          alt="resort"
          className="border-4 shadow-2xl hover:scale-105 duration-150"
        />
      </div>
      <div className="p-4 relative">
        <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img
          src="https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="resort"
          className="border-4 shadow-2xl hover:scale-105 duration-150"
        />
      </div>
    </div>
  );
};

export default Activity;
