import React from "react";
import "./Contact.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="contact-header">
        <h1>CONTACT ME</h1>
        <h4>Lets Connect and Grow Together</h4>
        <p>
          Whether you have a question, collaboration idea, or just want to say
          hello, feel free to reach out, Id love to hear from you!
        </p>
      </div>
      <div>
        <div className="contact-area">
          <div className="contact-items">
            <div>
              <div className="contact-email">
                <h5>Email</h5>
                <a href="mailto:Pascaliaekiteles05@gmail.com">
                  Pascaliaekiteles05@gmail.com
                </a>
              </div>
              <div className="contact-socials">
                <h5>Socials</h5>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/pascalia-ekiteles">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/ekiteles_pae/">
                    Instagram
                  </a>
                  <a href="https://www.tiktok.com/@passie_daniels">TikTok</a>
                </div>
              </div>
              <div className="contact-location">
                <h5>Location</h5>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Contact Form</h3>
              <form>
                <div className="form-group">
                  <div className="form-group-1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group-3">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  <div className="form-group-4">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <div className="form-group-5">
                    <input
                      type="submit"
                      value="Submit "
                      className="submit-form"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="questions">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div>
            <p>Q: Can I collaborate with you?</p>
            <p>A: Yes, I'm always open to new collaboration opportunities!</p>
          </div>
          <div>
            <p>Q: Do you accept guest posts?</p>
            <p>A: Yes, I'm always interested in hearing from other creators!</p>
          </div>
          <div>
            <p>Q: How quickly do you respond to messages?</p>
            <p>A: I strive to respond within 24-48 hours!</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Thank you for visiting !!</h3>
        <p>I appreciate you taking your time to explore my Journey.</p>
        <a href="/blog" className="contactpage-link">
          Back to Blog
        </a>
      </div>
      <Footer />
    </div>
  );
}
