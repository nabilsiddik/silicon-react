import React from 'react'
import './testimonial.css'
import quotesIcon from '../../assets/quotes.png'
import { FaStar } from "react-icons/fa";
import man from '../../assets/man.png'
import women from '../../assets/woment.png'

const TestimonialSection = () => {
  return (
    <section id="testimonial">
    <div className="container flex justify-between gap-30">
      <div className="heading_text">
        <h2>
          Clients are <br /> Loving Our App
        </h2>
      </div>
      <div className="testimonials flex justify-between gap-30">
        <div className="testimonial flex direction-column gap-10">
          <span className="quote_icon">
            <img src={quotesIcon} alt="" />
          </span>
          <ul className="rating flex items-center gap-5">
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
          </ul>
          <p>
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
            sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
            aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis
            sit amet.
          </p>
          <div className="client_profil flex items-center gap-10">
            <div className="profil_pic">
              <img src={women} alt="" />
            </div>
            <div>
              <h3>Fannie Summers</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
        <div className="testimonial flex direction-column gap-10">
          <span className="quote_icon">
            <img src={quotesIcon} alt="" />
          </span>
          <ul className="rating flex items-center gap-5">
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
            <li>
                <FaStar />
            </li>
          </ul>
          <p>
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
            sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
            aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis
            sit amet.
          </p>
          <div className="client_profil flex items-center gap-10">
            <div className="profil_pic">
              <img src={man} alt="" />
            </div>
            <div>
              <h3>Fannie Summers</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestimonialSection
