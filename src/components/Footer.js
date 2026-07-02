import React from "react";
import "../Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <h3>Student to Digital Independence</h3>
      <p>
        Helping students to build skills, discover opportunities and create
        financial independence through learning, technology amd personal growth.
      </p>
      <div className="footer-column">
        <div className="footer-column1">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/articles">Home</a>
            </li>
            <li>
              <a href="/courses">Blog</a>
            </li>
            <li>
              <a href="/about">About </a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column2">
          <h4>Resources</h4>
          <ul>
            <li>Student Tips</li>
            <li>Tech Resources</li>
            <li>Career Guide</li>
            <li>Side Hustles</li>
          </ul>
        </div>
        <div className="footer-column3">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://facebook.com/pascalia.aletia">Facebook</a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@passie_daniels">TikTok</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pascalia-ekiteles">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ekiteles_pae">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <h3>Join the journey</h3>
      <p>
        Get new articles, student oportunities, tech resources and career tips
        delivered straight to your inbox.
      </p>
      <form id="Newsletter">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
        />
        <input type="submit" className="subscribe-btn" value="Subscribe" />
      </form>
      <p className="footer-bottom">
        <div className="footer-bottom">
          &copy; 2026 Student to Digital Independence. All rights reserved.{" "}
        </div>
        <div className="footer-bottom">Designed with ❤️ by Pascalia </div>
      </p>
      <div className="footer-bottom">
        <p>
          This website was made by{" "}
          <a href="https://github.com/passiedaniels">Pascalia A.</a>, pushed on{" "}
          <a href="https://github.com/passiedaniels/pascaliaweb">Github</a> and
          hosted on <a href="https://pascaliaweb.netlify.app/">Netlify</a>
        </p>
      </div>
    </div>
  );
}
