import React from "react";
import "../Article.css";
import { Link } from "react-router-dom";
import article4Image from "../Images/article4.jpg";

export default function Article4() {
  return (
    <div className="Container">
      <div className="article4">
        <h1>How I Built My First React Website as a Student</h1>
        <p className="meta">Published: July 2026</p>
        <p className="meta">By Pascalia Aletia</p>
        <img src={article4Image} className="article4-img" alt="codes" />
        <h3>Introduction</h3>
        <p>
          Learning web development as a student can feel overwhelming at first.
          There are many technologies, tutorials, and tools to choose from. When
          I decided to learn React, I was excited but also nervous because I had
          never built a complete website on my own before.
        </p>
        <p>
          This article shares my journey of building my first React website and
          the lessons I learned along the way.
        </p>
        <h3>Why I Started Learning React</h3>
        <p>
          I wanted to learn a skill that would help me create modern websites
          and improve my opportunities in the digital world. As a student, I am
          interested in technology, online opportunities, and building skills
          that can lead to financial independence.
        </p>
        <p>
          React stood out because it is one of the most popular tools for
          building user interfaces and websites.
        </p>
        <h3>The Challenges I Faced</h3>
        <p>
          One of the first challenges was understanding components. At first, it
          was confusing to break a website into smaller reusable parts.
        </p>
        <p>
          Another challenge was routing. I wanted users to move between pages
          without reloading the website, but learning React Router took some
          time.
        </p>
        <p>
          I also struggled with responsive design. A website might look perfect
          on a laptop but completely different on a phone. Learning media
          queries and testing different screen sizes helped me solve this
          problem.
        </p>
        <h3>Building the Website</h3>
        <p>I started by creating the main pages:</p>
        <div className="Lesson-list">
          <ul className="Lesson-list">
            <li>Home Page</li>
            <li>About Page</li>
            <li>Contact Page</li>
            <li>Blog Page</li>
          </ul>
        </div>
        <p>
          After that, I designed a navigation bar and footer to make the website
          easy to navigate.
        </p>
        <p>
          I then connected a contact form using EmailJS so visitors could send
          messages directly from the website.
        </p>
        <p>
          Finally, I deployed the website using Netlify, making it accessible
          online.
        </p>
        <h3>Lessons I Learned</h3>

        <p>
          Building my first React website taught me several important lessons:
        </p>
        <div className="Lesson-list">
          <ul className="Lesson-list">
            <li>Consistency is more important than perfection.</li>
            <li> Google and documentation are valuable learning tools.</li>
            <li> Problems are a normal part of development.</li>
            <li> Responsive design should be considered from the beginning.</li>
            <li>Small improvements add up over time.</li>
          </ul>
        </div>

        <h3>Conclusion</h3>
        <p>
          Building my first React website was challenging, but it was also one
          of the most rewarding projects I have completed. It helped me improve
          my technical skills, gain confidence, and understand how real websites
          are created.
        </p>
        <p>
          If you are learning web development as a student, my advice is simple:
          start small, keep practicing, and don't be afraid to make mistakes.
          Every project teaches something new.
        </p>
        <Link to="/blog" className="article4-btn">
          Blog
        </Link>
      </div>
    </div>
  );
}
