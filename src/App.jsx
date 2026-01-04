import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [activeCategory, setActiveCategory] = useState("semua");

  return (
    <div>
      <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Home activeCategory={activeCategory} />
    </div>
  );
}

export default App;