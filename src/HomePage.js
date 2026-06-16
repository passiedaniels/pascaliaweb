import React from "react";
import "./HomePage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <header></header>
      <hero className="container hero">
        <div className="row">
          <div className="col-6">
            <h6>Your journey to skills, opportunities & financial freedom</h6>
            <h1>
              {" "}
              From Student Life to{" "}
              <span className="Blue">Digital Independence</span>
            </h1>
          </div>
          <div className="col-6">
            <img src="path/to/your/image.jpg" alt="Description of the " />{" "}
          </div>
        </div>
      </hero>
      <main>
        <section className="section1">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div>logo</div>
                <div>
                  <h4>Student Life</h4>
                  <p>
                    {" "}
                    Study tips,productivity,time management and university
                    advice.
                  </p>
                  <a href="https://example.com" className="green">
                    Explore
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div>logo</div>
                <div>
                  <h4>Tech & Skills</h4>
                  <p>
                    Learn coding,web development and digital skills from
                    beginner to advanced.
                  </p>

                  <a href="https://example.com" className="blue">
                    Explore
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div>logo</div>
                <div>
                  <h4>Career Growth</h4>
                  <p>
                    CV tips, job hunting,internship and building a successful
                    career.
                  </p>
                  <a href="https://example.com" className="violet">
                    Explore
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div>logo</div>
                <div>
                  <h4>Online Income</h4>
                  <p>
                    Side hustles, freelancing, business ideas and financial
                    freedom.{" "}
                  </p>
                  <a href="https://example.com" className="green">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <div className="flex">
              <div>
                <h3>Latest Articles</h3>
              </div>
              <div>
                <a href="https://example.com" className="blue">
                  View all articles
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="card1">
                  <img src="path/to/your/image.jpg" alt="Description " />
                  <h5>5 Study Habits That Changed My University Life</h5>

                  <a href="https://example.com" className="blue-button">
                    Student Life
                  </a>
                  <p> May 10 2024 . 5Min read</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card2">
                  <img src="path/to/your/image.jpg" alt="Description " />
                  <h5>How I'M Learning Frontend Development as a Student</h5>

                  <a href="https://example.com" className="blue-button">
                    Tech & Skills
                  </a>
                  <p> May 12 2024 . 7Min read</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card3">
                  <img src="path/to/your/image.jpg" alt="Description " />
                  <h5>
                    How to Create a CV With No Experience(Step-by-Step Guide)
                  </h5>
                  <a href="https://example.com" className="violet-button">
                    Career Growth
                  </a>
                  <p> May 15 2024 . 6Min read</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
