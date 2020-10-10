import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Intro from './components/intro.js'
import About from './components/about.js'
import * as content from './components/content.js';
import Footer from './components/footer';
import './css/main.css'
import ContactMe from './components/contact';
import Stats from './components/stats';

function App() {
  return (
    <div className="App">
    <Header/>
      <Intro />
      <About/>
    {/* </Header> */}
    <Stats/>
    <ContactMe/>
    <Footer/>
    </div>
  );
}

export default App;
