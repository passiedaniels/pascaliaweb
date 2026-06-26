import React from "react";
import "./Blog.css";
import NavBar from "./components/NavBar";

export default function BlogPage() {
  return (
    <div>
      <NavBar />
      <div className="area1">
        <h1>Blog</h1>
        <p>
          Insights, lessons,resources and opportunities for students building
          digital indepenence.
        </p>
        <a href="/search">Search more articles...</a>
      </div>
      \
      <div className="link-category">
        <h2>Browse by Category</h2>
        <a href="/all" className="link1">
          All
        </a>
        <a href="/student life" className="link2">
          Student Life
        </a>
        <a href="Tech" className="link3">
          Tech
        </a>
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
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest-article1">
          <div>
            <img src="/https" alt="article" />
          </div>
          <div>
            <h2>5 ways Student Earns</h2>
            <p>gduhfdkgdvhgdkhdkfggjs</p>
            <a href="/https">Read full article</a>
          </div>
        </div>
      </div>
    </div>
  );
}
