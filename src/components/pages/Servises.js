import React from "react"
import servise from "../images/Services.jpg"
import Footer from "../inc/Footer"
import "./services.css"
function Servises() {
  return (
    <div>
      <img src={servise} alt="service" />
      <div className="text_line">
        <h3 className="text">AGED CARE CLEANING SERVICE</h3>
        <p>
          Maintain a safe, healthy and comfortable facility with our aged care
          cleaning services
        </p>
        <p>
          Keeping an aged care facility clean and sanitary is important for
          several reasons. In addition to the health aspects, it enables your
          residents to reside in a clean and safe environment with an uplifting
          atmosphere that benefits everyone.
        </p>
        <p>
          With demonstrated experience in Aged Care and Retirement cleaning
          throughout Sydney, Riteway Cleaning understand the nuances involved in
          providing comprehensive cleaning services to a diverse range of
          facilities. Beyond satisfying the basic requirements of safety,
          health, hygiene and other compliance regulations, we will deliver a
          seamless Aged Care cleaning service, which is also accountable and
          transparent. The reason we go above and beyond, creating innovative
          systems and challenging traditional methods of cleaning – is because
          we believe it’s important to look after the aged.
        </p>
        <p>
          A clean facility can play a pivotal role in keeping their spirits up
          and encouraging them to remain healthy, safe and happy. But
          maintaining a proper cleanliness standard is a big job, and it calls
          for an experienced professional. With years of experience and all the
          right equipment, Riteway Commercial Cleaning Services has the
          professionalism you need. We can easily take the burden of cleaning
          and maintenance services off your hands!
        </p>
        <p>
          Anytime Commercial Services uses only environmentally-friendly
          products and practices, and we abide by all industry standards. We
          also tailor our services to each client’s specific circumstances, so
          you can rely on us to provide an affordable aged care cleaning package
          that suits your needs perfectly. Depending on your requirements, we
          can set up a daily, weekly or fortnightly schedule, at a time that
          doesn’t interfere with your residents and staff.
        </p>
        <p>
          With stringent quality control measures, you can rest assured that
          we’ll go above and beyond to achieve 100% satisfaction.
        </p>
        <Footer />
      </div>
    </div>
  )
}

export default Servises
