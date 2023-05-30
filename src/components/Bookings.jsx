import React from "react";

const Bookings = () => {
  return (
    <div
      id="deals"
      className="w-full m-auto p-4 bg-gradient-to-r from-cyan-600 to-cyan-200  pt-[70px] mt-[-60px] text-white"
    >
      <form className="lg:flex lg:justify-evenly items-center">
        <div className="flex flex-col m-4 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Grand Antigus</option>
            <option>Key West</option>
            <option>maldives</option>
            <option>Cozunel</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2 px-6">
            <label>Check-In</label>
            <input className="p-2 rounded-lg" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2 px-6">
            <label>Check-out</label>
            <input className="p-2 rounded-lg" type="date" />
          </div>
        </div>
        <div className="mx-2 px-4 flex flex-col">
          <label>Search</label>
          <button className="px-8 py-2 border rounded-lg">
            Rates & Availabilities
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bookings;
