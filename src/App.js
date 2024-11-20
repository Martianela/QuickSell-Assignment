import { useState } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import PopUp from "./Components/PopUp";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider> 
      <Navbar /> 
      <Hero />
    </DataProvider>
  );
}

export default App;
