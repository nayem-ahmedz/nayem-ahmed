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
import Blog from './pages/Blog';
import NoPage from './pages/NoPage';
import ScrollTo from './comps/ScrollTo';
import Versions from './pages/Versions';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

function App() {
  useEffect(()=>{
    if(TRACKING_ID){
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <ScrollTo />
      <main className='container'>
        <RoutesWithAnalytics />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

//from partner : Mr GPT-x
function RoutesWithAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pages/about' element={<About />} />
      <Route path='/pages/contact' element={<Contact />} />
      <Route path='/pages/projects' element={<Projects />} />
      <Route path='/pages/blog' element={<Blog />} />
      <Route path='/pages/versions' element={<Versions />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;