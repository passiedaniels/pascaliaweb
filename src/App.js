import AboutPage from "./AboutPage.js";
import "./App.css";
import Homepage from "./HomePage.js";
import BlogPage from "./BlogPage.js";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
