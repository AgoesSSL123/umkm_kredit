import React from "react";
import "../Navbar.css";

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const menuItems = [
    { id: "semua", label: "Beranda" },
    { id: "hp", label: "HP" },
    { id: "motor", label: "Motor" },
    { id: "peralatan", label: "Peralatan" },
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="/tuminah.png" 
          alt="Tuminah Kredit" 
          className="logo-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = '<div class="fallback-logo">Tuminah</div>';
          }}
        />
      </div>
      
      <div className="menu-container">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-button ${activeCategory === item.id ? 'active' : ''}`}
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