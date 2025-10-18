import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import havlogo_png from "/images/havlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click & Esc
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

  // Lock body scroll when menu open (preserve scroll position)
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      // store current scroll position
      document.body.dataset.scrollY = String(scrollY);
      // apply no-scroll helper class
      document.body.classList.add("no-scroll");
      // offset the body so visual content doesn't jump
      document.body.style.top = `-${scrollY}px`;
    } else {
      // restore
      const prev = document.body.dataset.scrollY ? parseInt(document.body.dataset.scrollY, 10) : 0;
      document.body.classList.remove("no-scroll");
      document.body.style.top = "";
      delete document.body.dataset.scrollY;
      // restore scroll position after a tick to ensure layout restored
      window.requestAnimationFrame(() => window.scrollTo(0, prev));
    }

    // cleanup on unmount
    return () => {
      const prev = document.body.dataset.scrollY ? parseInt(document.body.dataset.scrollY, 10) : 0;
      document.body.classList.remove("no-scroll");
      document.body.style.top = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, prev);
    };
  }, [open]);

  const closeAndScroll = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" aria-label="Go home" className="logo-link">
            <img src={havlogo_png} alt="Logo" />
          </Link>
        </div>

        {/* overlay to capture outside clicks (rendered only when menu open) */}
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
          {/* Minimal X close button as first item (keeps semantics) */}
          {/* <li role="none">
            <button
              className="nav-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ background: "transparent", border: "none", fontSize: "28px", cursor: "pointer" }}
            >
              ×
            </button>
          </li> */}

          <li role="none"><a role="menuitem" href="/#about">About</a></li>
          {/* <li role="none"><a role="menuitem" href="/pressrelease">Press Release</a></li> */}
          <li role="none"><a role="menuitem" href="/contact">Contact Us</a></li>
          <li role="none"><a role="menuitem" href="/faq">FAQs</a></li>
          <li role="none">
            <button
              className="btn rounded-pill"
              type="button"
              onClick={() => {
                window.open(
                  "https://www.eventbrite.co.uk/o/few-good-men-52207984483",
                  "_blank",
                  "noopener,noreferrer"
                );
                setOpen(false);
              }}
            >
              Buy Tickets
            </button>
          </li>
        </ul>

        <button
          ref={buttonRef}
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="tear-img tear-top" style={{ "--tear-h": "38px", zIndex: "100", background: "#ffffffff" }} />
    </>
  );
}
