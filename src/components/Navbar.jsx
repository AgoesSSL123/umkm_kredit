import React, { useState } from "react";
import "../Navbar.css";

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const [imgError, setImgError] = useState(false);

  const menuItems = [
    { id: "semua", label: "Beranda" },
    { id: "hp", label: "HP" },
    { id: "motor", label: "Motor" },
    { id: "peralatan", label: "Peralatan" },
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        {!imgError ? (
          <img
            src={`${import.meta.env.BASE_URL}tuminah.png`}
            alt="Tuminah Kredit"
            className="logo-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="fallback-logo">Tuminah</div>
        )}
      </div>

      <div className="menu-container">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-button ${activeCategory === item.id ? "active" : ""}`}
            onClick={() => setActiveCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
