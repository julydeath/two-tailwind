import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activity from "./components/Activity";
import Bookings from "./components/Bookings";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activity />
      <Bookings />
    </div>
  );
}

export default App;
