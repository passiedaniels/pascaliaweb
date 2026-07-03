import React from "react";
import "./About.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MyselfPic from "./Images/myself.jpg";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="herosection">
        <h1> ABOUT ME</h1>
        <p>From Student Life To Digital Independence</p>
      </div>
      <div className="mainSection">
        <div className="myself">
          <div className="image-me">
            <img src={MyselfPic} alt="me" className="picture-me" />
          </div>
          <div className="words-me">
            <h4>Hi, I am Pascalia</h4>
            <p>
              {" "}
              A university student passionate about technology, growth and
              helping other students discover opportunitie
            </p>
            <p>
              This Website documents my journey toward digital independence.
            </p>
            <Link to="/contact" className="blue-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="story-content">
        <h2>My Story</h2>

        <p>
          Like may students I have spent Much time searching for opportunities,
          learning new skills and trying to build a better future.
        </p>
        <p>
          Through Front End Development, content creation and continous
          learning, I am working towards financial freedom/ independence while
          sharing everything I learn.
        </p>
        <div className="quote">
          <p>"Small consistent step creates extraordinary results"</p>
        </div>
      </div>
      <div className="middle">
        <h2>My Journey</h2>
        <div className="cards">
          <div className="card">
            <h4>Students</h4>
            <p>Bulding my future</p>
            <p>Through Education</p>
          </div>
          <div className="card">
            <h4>Front-End Dev</h4>
            <p>Learning modern web</p>
            <p>development skills</p>
          </div>
          <div className="card">
            <h4>Content Creator</h4>
            <p>Sharing lessons and</p>
            <p> resources with students</p>
          </div>
          <div className="card">
            <h4>Enterprenuer</h4>
            <p>Working towards</p>
            <p>Financial Independence</p>
          </div>
        </div>
      </div>
      <div className="middle-1">
        <h2>What I Beleive In</h2>
        <div className="Values">
          <div className="value">
            <h5>Learning</h5>
            <p>Growth starts with learning</p>
          </div>
          <div className="value">
            <h5>Consistency</h5>
            <p>Small daily progress adds up</p>
          </div>
          <div className="value">
            <h5>Helping Others</h5>
            <p>Sharing Knowledge matters</p>
          </div>
          <div className="value">
            <h5>Faith</h5>
            <p>Trusting the journey and staying hopeful</p>
          </div>
        </div>
      </div>
      <div className="middle-2">
        <h2>Lets Grow Together</h2>
        <p>
          Whether you are a smart student, learner or future enterprenuer, you
          welcome here.
        </p>
        <Link to="contact" className="green-btn">
          Contact me
        </Link>
      </div>
      <Footer />
    </div>
  );
}
