import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/produk";
import "../Home.css";

const slides = [
  {
    title: "Gadget Impian Jadi Nyata 📱",
    subtitle: "Cicilan super ringan, tanpa biaya admin tersembunyi. Miliki hari ini!",
    bg: "linear-gradient(135deg, #1fa463 0%, #006231 100%)"
  },
  {
    title: "Gas Motor Baru Sekarang 🛵",
    subtitle: "Proses kilat, syarat cuma KTP. Motor impian siap antar ke rumah!",
    bg: "linear-gradient(135deg, #11998e 0%, #1d3331 100%)"
  },
  {
    title: "Solusi Kredit Anti Ribet ⚡",
    subtitle: "Gak pakai lama. Cukup WhatsApp, barang langsung diproses!",
    bg: "linear-gradient(135deg, #0f9b0f 0%, #1b4d3e 100%)"
  },
];

const Home = ({ activeCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const phoneNumber = "6285724276275"; // Nomor WhatsApp

  const filteredProducts =
    activeCategory === "semua"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Fungsi untuk membuat link WhatsApp
  const createWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Fungsi untuk membuka WhatsApp
  const openWhatsApp = (message) => {
    window.open(createWhatsAppLink(message), '_blank');
  };

  // AUTO SLIDE 5 DETIK
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="home-container">
      {/* SLIDER HEADER */}
      <div
        className="home-slider"
        style={{ background: slides[currentSlide].bg }}
      >
        <button className="slider-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="slider-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>

          <div className="category-info">
            <span className="category-badge">
              {activeCategory === "semua"
                ? "🏠 Semua Produk"
                : activeCategory === "hp"
                ? "📱 HP"
                : activeCategory === "motor"
                ? "🏍️ Motor"
                : "🛠️ Peralatan"}
            </span>
           
          </div>
        </div>

        <button className="slider-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* GRID PRODUK */}
      <div className="products-grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* FOOTER MODERN */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-logo">TUMINAH<span>KREDIT</span></h2>
            <p>Solusi Kredit barang impian dengan proses tercepat dan syarat termudah, Ayo Ajukan sekarang.</p>
           <div className="social-icons">
  <a href="https://wa.me/6285724276275" target="_blank" rel="noopener noreferrer">
    <img src="/icons/wa.png" alt="WhatsApp" className="social-icon" />
  </a>

  <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
    <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
  </a>

  <a href="https://tiktok.com/@username" target="_blank" rel="noopener noreferrer">
    <img src="/icons/tiktok.png" alt="TikTok" className="social-icon" />
  </a>
</div>

          </div>

          <div className="footer-section links">
            <h3>Layanan</h3>
            <ul>
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={() => openWhatsApp("Halo Tuminah Kredit, saya tertarik dengan layanan Kredit Handphone. Bisa info lebih detail?")}
                >
                  Kredit Handphone
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={() => openWhatsApp("Halo Tuminah Kredit, saya mau kredit Sepeda Motor. Berapa DP dan cicilannya?")}
                >
                  Kredit Sepeda Motor
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={() => openWhatsApp("Halo Tuminah Kredit, saya butuh Elektronik Rumah Tangga. Apa saja yang tersedia?")}
                >
                  Elektronik Rumah Tangga
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={() => openWhatsApp("Halo Tuminah Kredit, boleh minta Syarat & Ketentuan kreditnya?")}
                >
                  Syarat & Ketentuan
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Hubungi Kami</h3>
            <p>📍 Ds. Cemara Blok Bong, Kec, Cantigi.Kab, Indramayu.</p>
            <p>📞 +62 857-2427-6275</p>
            <p>✉️ halo@tuminahkredit.com</p>
            <div className="wa-badge">
              Respon Cepat via WhatsApp
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Tuminah Kredit. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;