import React from "react";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './container';
import {CTA, Brand, Navbar} from './componenets';
import './App.css'

const App = () => {
  return(
    <div className="App">
        <div className="gradient_bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
  )
}

export default App;
