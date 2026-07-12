import React from "react";
import "../Article.css";
import article61 from "../Images/article6(1).jpg";
import article62 from "../Images/article6(2).jpg";
import article63 from "../Images/article6(3).jpg";
import article64 from "../Images/article6(4).jpg";

export default function Article6() {
  return (
    <div className="Container">
      <div className="article4">
        <h1>
          Career Growth: How to Create a Strong CV Without Work Experience
        </h1>
        <img src={article61} alt="career" className="article-img" />
        <p className="meta">Published: July 2026</p>
        <p className="meta">By: Pascalia Aletia</p>
        <h3>Introduction</h3>
        <p>
          One of the biggest challenges students and recent graduates face is
          creating a CV when they have little or no work experience. Many people
          look at job descriptions and feel discouraged because employers often
          ask for experience.
        </p>
        <p>
          The truth is that everyone starts somewhere. Employers understand that
          students and graduates may not have years of professional experience.
          What matters is how you present your skills, education, projects, and
          potential.
        </p>
        <p>
          In this article, I will share practical tips on creating a strong CV
          even when you have never had a formal job.
        </p>
        <h3>Understanding What a CV Is</h3>
        <p>A CV (Curriculum Vitae) is a document that summarizes your:</p>
        <ul className="Lesson-list">
          <li>Education</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Interest</li>
          <li>Experiences</li>
          <li>Achievements</li>
          <li>Certifications</li>
        </ul>
        <p>
          Its purpose is to show employers why you are a suitable candidate for
          an opportunity.
        </p>
        <p>
          A good CV does not have to be long. In most cases, one page is enough
          for students and recent graduates.
        </p>
        <h3>Common Mistake Students Make</h3>
        <p>Many students believe:</p>
        <p>"I don't have experience, so I don't need a CV."</p>
        <p>This is not true.</p>
        <p>
          Even if you have never worked before, you still have experiences worth
          highlighting, such as:
        </p>
        <ul className="Lesson-list">
          <li>Academic projects</li>
          <li>Volunteer work</li>
          <li>Leadership roles</li>
          <li>School activities</li>
          <li>Personal projects</li>
          <li>Online courses</li>
        </ul>
        <h3>What to Include in Your CV</h3>
        <h3>1. Personal Information</h3>
        <p>Include:</p>
        <ul className="Lesson-list">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>Proffessional email address</li>
          <li>LinkedIn profile (if available)</li>
        </ul>
        <p>Avoid unnecessary information such as:</p>
        <ul className="Lesson-list">
          <li>Religion</li>
          <li> Marital status</li>
          <li>National ID number </li>{" "}
          <li>Personal photos (unless specifically requested) </li>
        </ul>
        <h3>2. Professional Summary</h3>
        <p>Write a short introduction about yourself.</p>
        <p>Example..</p>
        <p>
          Motivated university student with a strong interest in technology,
          problem-solving, and continuous learning. Passionate about developing
          practical skills and contributing positively to professional
          environments.
        </p>
        <p>Keep it short and professional.</p>
        <h3>3. Education</h3>
        <p>List your education starting with the most recent.</p>
        <p>Example:</p>
        <p>Bachelor of Science in Information Technology</p>
        <p>XYZ University</p>
        <p>2023 – Present</p>
        <p>Include:</p>
        <ul className="Lesson-list">
          <li>Relevant coursework</li>
          <li>Academic achievements</li>
          <li>Leadership positions</li>
        </ul>
        <p>if they strengthen your application.</p>
        <h3>4. Skills Section</h3>
        <p>
          Employers often look for skills, especially for entry-level positions.
        </p>
        <p>Examples:</p>
        <h5>Technical Skills</h5>
        <ul className="Lesson-list">
          <li>Microsoft office</li>
          <li>Canva</li>
          <li>Html</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Figma</li>
          <li>React</li>
        </ul>
        <h5>Soft Skills</h5>
        <ul className="Lesson-list">
          <li>Time Management</li>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Leadership</li>
          <li>Teamwork</li>
        </ul>
        <p>Only include skills you genuinely possess.</p>
        <img src={article62} className="article-img" alt="personal-work" />
        <h3>5. Include Personal Projects</h3>
        <p>This is where many students underestimate themselves.</p>
        <p>Projects demonstrate initiative and practical ability.</p>
        <p>Examples:</p>
        <ul className="Lesson-list">
          <li>Personal Website</li>
          <li>Blog</li>
          <li>Mobile application</li>
          <li>Graphic design portfolio</li>
          <li>Research project</li>
        </ul>
        <h3>Example</h3>
        <h5>Personal Blog Website</h5>
        <ul className="Lesson-list">
          <li>Designed and developed a responsive website using React.</li>
          <li>
            Published articles focused on student life, technology, and career
            development.
          </li>
          <li>
            Implemented responsive design principles for mobile and desktop
            users.
          </li>
        </ul>
        <p>Projects often impress employers more than simply listing skills.</p>
        <h3>6. Volunteer Experience</h3>
        <p>Volunteer work demonstrates responsibility and commitment.</p>
        <p>Examples include:</p>
        <ul className="Lesson-list">
          <li>Mentoring programs</li>
          <li>Event planning</li>
          <li>Student organizations</li>
          <li>Church activities</li>
          <li>Community service</li>
        </ul>
        <p>Even unpaid experiences can strengthen your CV.</p>
        <h3>7. Certifications and Online Courses</h3>
        <p>Online learning can help demonstrate initiative.</p>
        <p>Examples:</p>
        <ul className="Lesson-list">
          <li>Udemy Courses</li>
          <li>SheCodes</li>
          <li>FreeCodeCamp</li>
          <li>LinkedIn Learning</li>
          <li>Coursera Courses</li>
          <li>Google Certificates</li>
        </ul>
        <p>List certifications relevant to the role you are applying for.</p>

        <img src={article63} alt="cv example" className="article-img" />
        <h3>How to Make Your CV Stand Out</h3>
        <h5>Keep It Simple</h5>
        <p>Use a clean and professional design.</p>
        <p>Avoid:</p>
        <ul className="Lesson-list">
          <li>Excessive colors</li>
          <li>Fancy fonts</li>
          <li>Uneccessary Graphics</li>
        </ul>
        <h5>Customize Your CV</h5>
        <p>Tailor your CV to each opportunity.</p>
        <p>Highlight skills and experiences most relevant to the position.</p>
        <h5>Check for Errors</h5>
        <p>Before sending your CV:</p>
        <ul className="Lesson-list">
          <li>Check spelling</li>
          <li>Check grammar</li>
          <li>Ensure information is accurate</li>
          <li>Ask someone to help you review</li>
        </ul>
        <p>A well-written CV shows professionalism.</p>
        <h3>What Employers Look For</h3>
        <p>Even when candidates lack experience, employers often look for:</p>
        <ul className="Lesson-list">
          <li>Willingness to learn</li>
          <li>Reliability</li>
          <li>Initiative</li>
          <li>Positive attitude</li>
          <li>Problem-solving skills</li>
          <li>Communication skills</li>
        </ul>
        <p>Your CV should show evidence of these qualities.</p>
        <h3>Lessons I Have Learned</h3>
        <p>
          One lesson I have learned is that lack of experience should never stop
          someone from applying for opportunities.
        </p>
        <p>Everyone begins somewhere.</p>
        <p>
          The goal is to focus on what you have done, what you have learned, and
          what you can contribute rather than focusing only on what you have not
          yet achieved.
        </p>
        <img src={article64} alt="victory" className="article-img" />
        <h3>Conclusion</h3>
        <p>
          Creating a CV without work experience can feel intimidating, but it is
          entirely possible to build a strong application.
        </p>
        <p>
          By highlighting your education, projects, skills, volunteer work, and
          certifications, you can demonstrate your potential to employers and
          recruiters.
        </p>
        <p>
          Remember, your first CV is not about proving that you know everything.
          It is about showing that you are willing to learn, grow, and
          contribute.
        </p>
        <p>
          Every successful professional once started with little or no
          experience. Your career journey begins with taking the first step.
        </p>
      </div>
    </div>
  );
}
