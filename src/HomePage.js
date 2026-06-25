import React from "react";
import "./Homepage.css";
import Footer from "./components/Footer.js";
import MainSection from "./components/MainSection.js";
import HeroImage from "./Images/Hero.jpg";

export default function Homepage() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header1">
            <div className="content1">
              <h6>Your journey to skills, opportunities & financial freedom</h6>
              <h1>
                From Student Life to{" "}
                <span className="highlight">Independent Digital Life</span>
              </h1>
              <p>
                I am documenting my journey as a student learning tech,
                exploring online opportunities and working towards financial
                independence while sharing everything I learn.
              </p>
              <div className="btn">
                <div>
                  <a href="/articles" className="primary">
                    Read latest articles
                  </a>
                </div>
                <div>
                  <a href="/courses" className="secondary">
                    Start your journey
                  </a>
                </div>
              </div>
              <p className="note">
                Building a community of students learning, growing and creating
                digital independence.
              </p>
            </div>
            <div className="content2">
              <img src={HeroImage} alt="Hero" className="heroImage" />
            </div>
          </div>
        </div>
      </header>
      <div className="mainSection">
        <MainSection />
      </div>
      <Footer />
    </div>
  );
}
