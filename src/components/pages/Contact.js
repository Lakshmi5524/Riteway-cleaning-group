import React from "react"
import contact from "../images/contact.jpg"
import Footer from "../inc/Footer"
import "./contact.css"
function Contact() {
  return (
    <>
      <div className="contactpage">
        <img src={contact} alt="" />
        <div className="containers">
          <h3 className="contact_text">
            CONTACT <span>US</span>
          </h3>
          <div className="contact-box">
            <div className="contact-left">
              <form>
                <label>NAME</label>
                <input type="text" placeholder="name" />
                <div className="input-row">
                  <div className="input-group">
                    <label>BUSINESSNAME</label>
                    <input type="text" placeholder="Business name" />
                  </div>

                  <div className="input-group">
                    <label>LOCATION</label>
                    <input type="text" placeholder="Location" />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>EMAIL</label>
                    <input type="email" placeholder="info@rightway.com" />
                  </div>

                  <div className="input-group">
                    <label>DETAILS</label>
                    <input type="number" placeholder="123456789" />
                  </div>
                </div>

                <div className="input-group">
                  <label>DETAILS</label>
                  <textarea
                    className="textarea"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="button_btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="contact-right">
              <p>RITE WAY CLEANING</p>
              <h4>Phone :</h4> <label>0123456789</label>
              <h4>Email :</h4> <label>INFO@RITEWAY.COM</label>
              <h4>Contact :</h4>
              <label>24 PINEHURST,AVENUE,GLENMORE PARK,NSW 2745</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
