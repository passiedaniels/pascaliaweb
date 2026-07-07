import React from "react";
import "../Article.css";
import article1 from "../Images/article1.jpg";
import mineImage from "../Images/mine.png";

export default function Article1() {
  return (
    <div className="Container">
      <div className="article4">
        <h1>How I Started Learning Front-End Development as a Student</h1>
        <p className="meta">Published: July 2026</p>
        <p className="meta">By: Pascalia Aletia</p>
        <img src={article1} className="article-img" alt="laptop" />
        <h3>Introduction</h3>
        <p>
          When I first heard about web development, I had no idea where to
          begin. Terms like HTML, CSS, JavaScript, and React sounded complicated
          and intimidating. As a student, I wanted to learn a skill that would
          help me build projects, solve problems, and potentially create
          opportunities for myself in the future.
        </p>
        <p>
          Looking back, starting was the hardest part. I didn't know everything,
          but I decided to take one step at a time.
        </p>
        <h2>My First Introduction to Web Development</h2>
        <p>
          My journey began when I became curious about how websites are created.
          Every day, I visited websites without thinking about the work that
          goes into building them. Eventually, I started researching and
          discovered that front-end developers are responsible for creating the
          parts of websites that users see and interact with.
        </p>
        <p>
          This sparked my interest because I enjoyed creativity and technology.
          I wanted to learn how to turn ideas into real websites.
        </p>
        <h3>Learning the Basics</h3>
        <p>The first technologies I learned were HTML and CSS.</p>
        <p>
          HTML taught me how to structure web pages using elements such as
          headings, paragraphs, images, and links. CSS taught me how to style
          those elements by changing colors, layouts, fonts, and spacing.
        </p>
        <p>
          At first, even simple concepts felt difficult. I often made mistakes,
          forgot tags, and spent hours trying to fix small errors. However,
          every mistake helped me learn something new.
        </p>
        <p>
          After becoming comfortable with HTML and CSS, I started learning
          JavaScript. This was where websites became more interactive.
          JavaScript introduced me to concepts such as variables, functions,
          conditions, and user interactions.
        </p>
        <h3>The Challenges I Faced</h3>
        <p>Learning front-end development was not always easy.</p>
        <p>Some of the challenges I faced included:</p>
        <ul className="Lesson-list">
          {" "}
          <li>Understanding new concepts and technical terms.</li>
          <li>Fixing errors that seemed impossible to solve.</li>
          <li>
            Feeling overwhelmed by the amount of information available online.
          </li>
          <li>Comparing my progress to more experienced developers.</li>
          <li>Balancing learning with my responsibilities as a student.</li>
        </ul>
        <p>
          There were moments when I felt stuck and considered giving up.
          However, I reminded myself that every developer starts as a beginner.
        </p>
        <h3>Building Projects</h3>
        <img src={mineImage} alt="mine" className="article-img" />
        <p>
          One of the biggest lessons I learned was that the best way to improve
          is by building projects.
        </p>
        <p>
          Instead of only watching tutorials, I started creating small projects
          to practice my skills. Each project taught me something new and helped
          me gain confidence.
        </p>
        <p>
          As I continued learning, I eventually discovered React, a JavaScript
          library used for building modern user interfaces. React introduced me
          to components, props, state management, and a new way of thinking
          about web development.
        </p>
        <p>
          Building my first React website was both challenging and rewarding
          because it allowed me to combine everything I had learned.
        </p>
        <h3>Resources That Helped Me</h3>
        <p>
          Throughout my journey, I used a variety of resources to learn and
          improve:
        </p>
        <ul className="Lesson-list">
          <li>Online courses</li>
          <li>Documentations</li>
          <li>Youtube Tutorials</li>
          <li>Coding challenges</li>
          <li>Practice Projects</li>
          <li>Developer communities</li>
        </ul>
        <p>
          Whenever I encountered a problem, I learned to search for solutions,
          read documentation, and experiment until I found an answer.
        </p>
        <h3>Lessons I Learned</h3>
        <p>
          Some of the most valuable lessons from my front-end development
          journey include:
        </p>
        <ul className="Lesson-list">
          <li>Every expert was once a beginner.</li>
          <li>Progress happens one step at a time.</li>
          <li>Asking questions is a strength, not a weakness.</li>
          <li>Building projects helps you learn faster.</li>
          <li>Making mistakes is part of the learning process</li>
          <li>Consistency is more important than perfection.</li>
        </ul>
        <h3>Conclusion</h3>
        <p>
          Starting my front-end development journey has been one of the most
          rewarding experiences of my life. Although there were challenges along
          the way, each obstacle helped me grow and improve my skills.
        </p>
        <p>
          I am still learning, but I am proud of how far I have come. My journey
          has taught me that success does not happen overnight. It comes from
          showing up consistently, learning from mistakes, and continuing to
          move forward even when things seem difficult.
        </p>
        <p>
          If you are thinking about learning front-end development, my advice is
          simple: start where you are, use the resources available to you, and
          keep going. Every small step you take today can lead to something
          amazing in the future.
        </p>
      </div>
    </div>
  );
}
