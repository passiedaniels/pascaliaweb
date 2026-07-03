import React from "react";
import "./Blog.css";
import NavBar from "./components/NavBar";
import frontEnd from "./Images/front-end.jpg";
import frontDev from "./Images/frontdev.jpg";
import incomeImage from "./Images/income.jpg";
import studLife from "./Images/studLife.jpg";
import student from "./Images/student.jpg";
import careerGrowth from "./Images/career growth.jpg";
import opportunities from "./Images/opportunities.jpg";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <NavBar />
      <div className="area1">
        <h1>Blog</h1>
        <p>
          Insights, lessons,resources and opportunities for students building
          digital indepenence.
        </p>
        <a href="/search">Search more articles...</a>
      </div>

      <div className="link-category">
        <h2>Browse by Category</h2>
        <div clasName="browse-category-links">
          <div className="category-links-1">
            <a href="/all" className="link1">
              All
            </a>
            <a href="/student life" className="link2">
              Student Life
            </a>
            <a href="Tech" className="link3">
              Tech
            </a>
          </div>
          <div className="category-links-2">
            <a href="Career" className="link4">
              Career
            </a>
            <a href="/opportunities" className="link5 ">
              Opportunities
            </a>
            <a href="/income" className="link6">
              Income
            </a>
          </div>
        </div>
      </div>
      <div className="featured-article">
        <h2>Featured Article</h2>
        <div>
          <img src={frontEnd} alt="article" />
        </div>
        <h4>How I started learning Front End Development..</h4>
        <p>
          {" "}
          A personal story about learning coding as a student, overcoming
          challenges and building practical skills.
        </p>
        <a href="/more" className="read-more">
          Read More
        </a>
      </div>
      <div className="latest-articles-header">
        <h2>Latest Articles</h2>
      </div>
      <div className="latest-articles">
        <div>
          <div className="article-card">
            <div>
              <img src={incomeImage} alt="article" />
            </div>
            <div>
              <h3>Online Income</h3>
              <p>Earn Online as a Student</p>
              <a href="/https" className="category-badge">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="article-card">
          <div>
            <img src={student} alt="article" />
          </div>
          <div>
            <h3>Student Life</h3>
            <p>Study Habits That Works</p>
            <a href="/https">Read More</a>
          </div>
        </div>

        <div className="article-card">
          <div>
            <img src={opportunities} alt="article" />
          </div>
          <div>
            <h3>Opportunities</h3>
            <p>Internship Guide</p>
            <a href="/https" className="category-badge">
              Read More
            </a>
          </div>
        </div>

        <div className="article-card">
          <div>
            <img src={careerGrowth} alt="article" />
          </div>
          <div>
            <h3>Career Growth</h3>
            <p>Creating CV with no experience</p>
            <a href="/https" className="category-badge">
              Read full article
            </a>
          </div>
        </div>

        <div className="article-card">
          <div>
            <img src={frontDev} alt="article" />
          </div>
          <div>
            <h3>Tech skills</h3>
            <p>My First React Project</p>
            <a href="/https" className="category-badge">
              Read More
            </a>
          </div>
        </div>

        <div className="article-card">
          <div>
            <img src={studLife} alt="article" />
          </div>
          <div>
            <h3>Student Life</h3>
            <p>5 side hustles for students</p>
            <a href="https/hhhh" className="category-badge">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="Newsletter">
        <h3>Join the Journey</h3>
        <p>
          Get new articles,opportunities, tech resources and student success
          tips delivered to your inbox
        </p>
        <form>
          <input type="email" placeholder="Enter Email" className="input" />
          <input type="submit" placeholder="Subscribe" className="button" />
        </form>
      </div>
      <div className="blogpage-footer">
        <h3>Student Digital Independence</h3>
        <p>
          Helping students build skills, discover opportunities and create
          financial independence online.
        </p>
        <div className="last-area">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home">About</a>
              </li>
              <li>
                <a href="/home">Blog</a>
              </li>
              <li>
                <a href="/home">Contact</a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <h4>Resources</h4>
            <ul>
              <li>Student Tips </li>
              <li> Career Guide</li>
              <li> Tech Resources</li>
              <li> Opportunities</li>
            </ul>
          </div>
          <div className="connect">
            <h4> Connect</h4>
            <ul>
              <li>
                <a href="https/">Tiktok</a>
              </li>
              <li>
                <a href="https/">Instagram</a>
              </li>
              <li>
                <a href="https/">Linkedin</a>
              </li>
              <li>
                <a href="mailto:pascaliaekiteles05@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
