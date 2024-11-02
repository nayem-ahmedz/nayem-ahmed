import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './comps/Header';
import Home from './comps/Home';
import Services from './comps/Services';
import Footer from './comps/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/about' element={<About />} />
        <Route path='/pages/contact' element={<Contact />} />
        <Route path='/pages/projects' element={<Projects />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Services />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;