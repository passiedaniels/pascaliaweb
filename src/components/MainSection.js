import React from "react";
import "../Main.css";
import cvImage from "../Images/cv.jpg";
import frontEnd from "../Images/front-end.jpg";
import learnImage from "../Images/learn.jpg";

export default function MainSection() {
  return (
    <div className="mainSection">
      <div className="stats">
        <div className="stat1">
          <div>2years</div>
          <div>Until Grad </div>
        </div>
        <div className="stat2">
          <div>1 skill</div>
          <div>Front End</div>
        </div>
        <div className="stat3">
          <div>1 Mission</div>
          <div>Helping </div>
          <div>Students</div>
        </div>
        <div className="stat4">
          <div>2026</div>
          <div>journey</div>
          <div>begins</div>
        </div>
      </div>
      <div className="mainSection1">
        <div className="main1">
          <div className="image1">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <div className="Main1-content">
            <h4>Student Life</h4>
            <p>
              Study tips, productivity, time management and university advice
            </p>
            <a href="/articles" className="green-btn">
              Explore
            </a>
          </div>
        </div>
        <div className="main2">
          <div className="image2">
            <i className="bi bi-laptop"></i>
          </div>
          <div className="Main2-content">
            <h4>Tech & Skills</h4>
            <p>
              Access exclusive courses, tutorials and resources to enhance your
              skills
            </p>
            <a href="/courses" className="blue-btn">
              Explore
            </a>
          </div>
        </div>
        <div className="main3">
          <div className="image3">
            <i className="bi bi-graph-up-arrow"></i>
          </div>
          <div className="Main3-content">
            <h4>Career Growth</h4>
            <p>
              Cv tips, job hunting, internship and building a successful career
            </p>
            <a href="/articles" className="purple-btn">
              Explore
            </a>
          </div>
        </div>
        <div className="main4">
          <div className="image4">
            <i className="bi bi-cash-stack"></i>
          </div>
          <div className="Main4-content">
            <h4>Online Income</h4>
            <p>
              Side hustles, freelancing, business ideas and financial freedom.
            </p>
            <a href="/articles" className="green-btn">
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className="mainSection2">
        <div className="learn">
          <h3>Latest Articles</h3>
        </div>
        <div className="learn-content">
          <div className="articles">
            <div className="article1">
              <img src={learnImage} alt="Article 1" />
              <h4>5 Study Habits that changed my University life</h4>
              <p>May 10, 2024. 5 min read</p>
            </div>
            <div className="article2">
              <img src={frontEnd} alt="Article 2" />
              <h4>How I am learning Frontend Development as a student</h4>
              <p>May 8, 2024. 7 min read</p>
            </div>
            <div className="article3">
              <img src={cvImage} alt="Article 3" />
              <h4>How to create CV with No Experience (step-by-step)</h4>
              <p>May 5, 2024. 6 min read</p>
            </div>
          </div>
        </div>
      </div>
      <div className="CTA">
        <div className="mainSection3">
          <h5>Hi, I am pascalia.</h5>
          <p>
            A university student passionate about, technology, career owth and
            helping students discover opportunity online.
          </p>
          <p>
            This website documenta my journey from studnt life to digital
            independence
          </p>
          <a href="/about" className="blue-btn">
            Read my story
          </a>
        </div>
        <div className="mainSection4">
          <h4>Ready to start your Digital Journey?</h4>
          <p>Learn New Skills.</p>
          <p>Discover Opportunities.</p>
          <p>Build your Future.</p>
          <a href="/blog" className="green-btn">
            Explore Articles
          </a>
        </div>
      </div>
    </div>
  );
}
