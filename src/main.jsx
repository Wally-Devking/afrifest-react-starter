import ReactDOM from 'react-dom/client';
import App from "./App";
import './styles/global.css';
import './styles/variables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PressRelease from "./components/PressRelease";
import Contact from "./components/Contact";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import FaqPage from './components/FaqPage.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <App />
      <Route path="/" element={<App />} />
      <Route path="/pressrelease" element={<PressRelease />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  </HashRouter>
  </React.StrictMode>

    
);

