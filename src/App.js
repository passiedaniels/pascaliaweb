import AboutPage from "./AboutPage.js";
import "./App.css";
import Homepage from "./HomePage.js";
import BlogPage from "./BlogPage.js";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Article4 from "./components/Article4.js";
import Article1 from "./components/Article1.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Article2 from "./components/Article2.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/article4" element={<Article4 />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
      </Routes>
    </div>
  );
}

export default App;
