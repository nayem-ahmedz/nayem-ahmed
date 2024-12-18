import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/pages-style.css';
import Header from './comps/Header';
import Home from './comps/Home';
import Footer from './comps/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';
import ScrollTo from './comps/ScrollTo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTo />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/about' element={<About />} />
        <Route path='/pages/contact' element={<Contact />} />
        <Route path='/pages/projects' element={<Projects />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;