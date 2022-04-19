import React from "react"
import Slider from "../inc/Slider.js"
import proffession from "../images/3.jpg"
import service from "../images/5.jpg"
import client from "../images/client.jpg"
import boxes from "../images/img.jpg"
import agrd from "../images/Aged.jpg"
import footer from "../images/1.jpg"
import "./home.css"
import { Link } from "react-router-dom"
import Footer from "../inc/Footer.js"
function Home() {
  return (
    <>
      <div className="Homepage">
        <Slider />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center ">
                <h1>WE LOVE WHAT WE DO: </h1>
                <h6>PROVIDING CLEAN RESIDENTIAL AND MAKE YOUR LIFE EASIER</h6>
              </div>
            </div>
          </div>
          <div className="boximg">
            <img src={boxes} alt="" className="boxes" />
          </div>
          <div className="professionimg">
            <img src={proffession} alt="" />
          </div>
          <h6>
            OUR <span>CLINETS</span>
          </h6>

          <div className="clints">
            <img src={client} alt="client" />
          </div>
        </section>

        <div className="row">
          <div className="col-md-12 text-center">
            <h6>
              OUR <span>SERVICES</span>
            </h6>
            <p className="Services">
              It’s no secret that a clean and healthy workplace can improve
              productivity and employee retention. By keeping your premises
              hygienic and sanitary, we can help your organisation reach its
              full potential. Our professional cleaning staff are highly trained
              and uses only the best equipment.
            </p>
          </div>
        </div>

        <div className="containers row">
          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card show">
              <img
                src={service}
                className="h-100 border-bottom aged"
                alt="servces"
              />
              <div className="bgcolor">
                <h6 className="texline">AGED CARE CLEANING</h6>
                <p className="servises">
                  Maintain a safe,healthy and comfortable facility with our aged
                  care cleaning
                </p>
                <button>
                  <Link to="/servises" className="btns btn-link">
                    Redd more
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <h6>
                OUR <span>COMPANY MISSSION</span>
              </h6>
              <p className="Services">
                Our success is based upon our customer focus. Our experienced
                cleaners are trained to clean even the worst places and
                transform them into clean & healthy ones, making your business
                work space an enjoyable environment. Our recruitment strategies
                are carefully planned and we give special training to all our
                cleaning staff. All our staff are employees of riteway cleaning.
                We aim to offer them value and quality services to enrich lives
                and enahance your business success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={footer} alt="footer" className="footers" />
    </>
  )
}

export default Home
