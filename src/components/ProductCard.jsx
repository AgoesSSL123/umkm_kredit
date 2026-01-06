const ProductCard = ({ product }) => {
  const phoneNumber = "6285724276275";

  const message = `Halo admin, saya ingin mengajukan kredit:

Barang: ${product.name}
Harga: ${product.price}
Cicilan: ${product.cicilan}
Kategori: ${product.category}`;

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={styles.image}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=Produk";
          }}
        />
      </div>
      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <div style={styles.priceContainer}>
          <span style={styles.priceLabel}>Harga:</span>
          <span style={styles.price}>{product.price}</span>
        </div>
        <div style={styles.installmentContainer}>
          <span style={styles.installmentLabel}>Cicilan:</span>
          <span style={styles.installment}>{product.cicilan}</span>
        </div>
        <div style={styles.categoryContainer}>
          <span style={styles.categoryLabel}>Kategori:</span>
          <span style={styles.category}>{product.category}</span>
        </div>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.link}
        >
          <button style={styles.button}>
            Ajukan Kredit via WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
 imageContainer: {
  width: "100%",
  height: "220px",   // 🔒 KUNCI TINGGI
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
image: {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
},
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "20px",
    margin: "0 0 15px 0",
    color: "#2c3e50",
    fontWeight: "600",
  },
  priceContainer: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  priceLabel: {
    fontWeight: "500",
    color: "#7f8c8d",
    marginRight: "8px",
    fontSize: "14px",
  },
  price: {
    color: "#887613ff",
    fontWeight: "bold",
    fontSize: "18px",
  },
  installmentContainer: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  installmentLabel: {
    fontWeight: "500",
    color: "#7f8c8d",
    marginRight: "8px",
    fontSize: "14px",
  },
  installment: {
    color: "#27ae60",
    fontWeight: "600",
    fontSize: "16px",
  },
  categoryContainer: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  categoryLabel: {
    fontWeight: "500",
    color: "#7f8c8d",
    marginRight: "8px",
    fontSize: "14px",
  },
  category: {
    backgroundColor: "#e8f4fc",
    color: "#3498db",
    padding: "4px 10px",
    borderRadius: "15px",
    fontSize: "13px",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  link: {
    textDecoration: "none",
    marginTop: "auto",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
};

export default ProductCard;