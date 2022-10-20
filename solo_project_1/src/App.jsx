import { useState } from 'react'
import React from "react"
import Background from "./components/background.jsx"
import './App.css'
import Header from "./components/header.jsx";
import MainContent from "./components/main_content";
import Footer from "./components/footer.jsx";
import MainBody from "./components/buttons.jsx";

function App() {
  return (
  <div className="container">
    {/*<MainBody/>*/}
    <Header/>
    <MainContent/>
    <Footer/>
  </div>
  )
}

export default App
