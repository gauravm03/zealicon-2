import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2"
import "./App.css"
const App = () => {
  return( <div className="wrapper flex flex-col bg-repeat  w-[100vw] h-[100vh] ">
     
     
       <Navbar/>
       <Navbar2/>
       <Home/>
       <Footer/>
  </div>
  )
};

export default App;
