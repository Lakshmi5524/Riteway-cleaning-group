import React from "react"
import about from "../images/about_us.jpg"
import Footer from "../inc/Footer"
import "./about.css"
function Aboutus() {
  return (
    <div>
      <img src={about} className="about" alt="aboutimg" />
      <div className="text_line">
        <h3 className="about1">
          ABOUT<span>US</span>
        </h3>
        <div className="uderline"></div>
        <p>
          Anytime Cleaning Sydney are a professional cleaning company servicing
          all areas of Sydney. We provide cleaning services & solutions for many
          professional establishments, including: business, corporate,
          commercial, industrial, fitness, schools, and medical premises. With
          many years of professional cleaning experience, we provide a high
          quality cleaning service for one-off jobs and ongoing cleaning
          contracts.
        </p>
        <p>
          Your satisfaction is our top priority. While we are passionate about
          hygiene and cleanliness, our proudest moments are when our clients are
          satisfied with our work. All of our dealings are client-focused and
          this focus runs in the core of our entire team of friendly and
          professional cleaners. Whether you have a question, need urgent
          cleaning, or are looking for an ongoing cleaning services provider,
          don’t hesitate to contact us and speak to our friendly staff.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Aboutus
