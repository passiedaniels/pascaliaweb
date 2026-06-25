import React from "react";
import "../Main.css";

export default function MainSection() {
  return (
    <div className="mainSection">
      <div className="main1">
        <div className="image1">
          <img src="https://example.com/hat.jpg" alt="Hat" />
        </div>
        <div className="Main1-content">
          <h4>Student Life</h4>
          <p>Study tips, productivity, time management and university advice</p>
          <a href="/articles" className="green-btn">
            Explore
          </a>
        </div>
      </div>
      <div className="main2">
        <div className="image2">
          <img src="https://example.com/tech.jpg" alt="Tech" />
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
          <img src="https://example.com/career.jpg" alt="Career" />
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
          <img src="https://example.com/income.jpg" alt="Income" />
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
  );
}
