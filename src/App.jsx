import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
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

// const TRACKING_ID = 'G-0C71MXFTJN';

function App() {
  /* useEffect(()=>{
    ReactGA.initialize(TRACKING_ID);
  }, []); */
  return (
    <BrowserRouter>
      <Header />
      <ScrollTo />
      <main>
        <RoutesWithAnalytics />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

//from partner : Mr GPT-x
function RoutesWithAnalytics() {
  /* const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]); */

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pages/about' element={<About />} />
      <Route path='/pages/contact' element={<Contact />} />
      <Route path='/pages/projects' element={<Projects />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;