import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import havlogo_png from "../assets/images/havlogo.png";




export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (!open) return;
      const menuEl = menuRef.current;
      const btnEl = buttonRef.current;
      if (menuEl && !menuEl.contains(e.target) && btnEl && !btnEl.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  // Optional: lock body scroll when menu open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const closeAndScroll = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        
    <Link to="/" aria-label="Go home">
      <img src={havlogo_png} alt="Logo" />
    </Link>
      
      </div>


      {/* Mobile overlay to capture outside clicks */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}

      <ul
        ref={menuRef}
        className={`nav-links ${open ? "active" : ""}`}
        onClick={(e) => {
          // If a link inside the menu is clicked, close the menu
          if (e.target.tagName === "A" || e.target.closest("a")) closeAndScroll();
        }}
        role="menu"
        aria-hidden={!open}
      >

        <li role="none"><a role="menuitem" a href="/#about">About</a></li>
        <li role="none"><a role="menuitem" a href="/pressrelease">Press Release</a></li>
        <li role="none"><a role="menuitem" a href="/contact">Contact Us</a></li>
        <li role="none"><a role="menuitem" a href="/faq">FAQs</a></li>
<li role="none">
  <button
    className="btn rounded-pill"
    type="button"
    onClick={() => window.open(
      "https://www.tiktok.com/@lagos_night_uk?_t=ZN-90EqrWrlYd4&_r=1",
      "_blank",
      "noopener,noreferrer"
    )}
  >
    Our Merch
  </button>
</li>

   
      </ul>


      <button
        ref={buttonRef}
        className="hamburger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
