import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/variables.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PressRelease from "./components/PressRelease";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About.jsx';
import FaqPage from './components/FaqPage.jsx'; 
import './styles/fonts.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/afrifest-react-starter">   {/* ✅ this is the key fix */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pressrelease" element={<PressRelease />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  </BrowserRouter>
)
