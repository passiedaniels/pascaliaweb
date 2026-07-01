import React from "react";
import "./Blog.css";
import NavBar from "./components/NavBar";

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
        <img src="/article" alt="article" />
        <h4>How I started learning Front End Development..</h4>
        <p>
          {" "}
          A personal story about learning coding as a studen, overcoming
          challenges and building practical skills.
        </p>
        <a href="/more">Read More</a>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>Online Income</h2>
            <p>Earn Online as a Student</p>
            <a href="/https">Read More</a>
          </div>
        </div>
      </div>

      <div className="latest-article2">
        <div>
          <img src="/https" alt="article" />
        </div>
        <div>
          <h2>Student Life</h2>
          <p>Study Habits That Works</p>
          <a href="/https">Read More</a>
        </div>
      </div>

      <div className="latest-article3">
        <div>
          <img src="/https" alt="article" />
        </div>
        <div>
          <h2>Opportunities</h2>
          <p>Internship Guide</p>
          <a href="/https">Read More</a>
        </div>
      </div>

      <div className="latest-article4">
        <div>
          <img src="/https" alt="article" />
        </div>
        <div>
          <h2>Career Growth</h2>
          <p>Creating CV with no experience</p>
          <a href="/https">Read full article</a>
        </div>
      </div>

      <div className="latest-article5">
        <div>
          <img src="/https" alt="article" />
        </div>
        <div>
          <h2>Tech skills</h2>
          <p>My First React Project</p>
          <a href="/https">Read More</a>
        </div>
      </div>

      <div className="latest-article6">
        <div>
          <img src="/https" alt="article" />
        </div>
        <div>
          <h2>Student Life</h2>
          <p>5 side hustles for students</p>
          <a href="/https">Read More</a>
        </div>
      </div>

      <div>
        <h3>Join the Journey</h3>
        <p>
          Get new articles,opportunities, tech resources and student success
          tips delivered to your inbox
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter Email"
            className="email-input"
          />
          <input
            type="submit"
            placeholder="Subscribe"
            className="subscribe-btn"
          />
        </form>
      </div>
      <div>
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
