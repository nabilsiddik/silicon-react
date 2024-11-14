import React from 'react'
import './faq.css'
import { FaAngleDown } from "react-icons/fa";

const FaqSection = () => {
  return (
    <section id="faq">
            <div className="container flex justify-between gap-30">
            <div className="section_heading_mobile mb-30">
                <h2>
                Any questions? <br /> Check out the FAQs
                </h2>
                <p className="mt-10">
                Still have unanswered questions and need to&nbsp;get in&nbsp;touch?
                </p>
            </div>
            <div className="faq_left">
                <div className="section_heading desktop mb-30">
                <h2>
                    Any questions? <br /> Check out the FAQs
                </h2>
                <p className="mt-10">
                    Still have unanswered questions and need to&nbsp;get in&nbsp;touch?
                </p>
                </div>
                <div className="contact flex gap-20">
                <div className="contact_box box_1 flex direction-column gap-10">
                    <span className="icon">
                    <i className="fa-solid fa-phone" />
                    </span>
                    <p>Still have questions?</p>
                    <a href="#">
                    contact us
                    <span className="icon">
                        <i className="fa-solid fa-arrow-right" />
                    </span>
                    </a>
                </div>
                <div className="contact_box box_2 flex direction-column gap-10">
                    <span className="icon">
                    <i className="fa-brands fa-rocketchat" />
                    </span>
                    <p>Still have questions?</p>
                    <a href="#">
                    contact us
                    <span className="icon">
                        <i className="fa-solid fa-arrow-right" />
                    </span>
                    </a>
                </div>
                <button>Contact Us Now</button>
                </div>
            </div>
            <div className="faq_right">
                <div className="accordion">
                <ul className="flex direction-column gap-10">
                    <li className="flex items-center justify-between">
                    <p>Is any of my personal information stored in the App?</p>
                    <div className="icon">
                        <span>
                        <i className="fa-solid fa-angle-down" />
                        </span>
                    </div>
                    </li>
                    <li className="flex items-center justify-between">
                    <p>What formats can I download my transaction history in?</p>
                    <div className="icon">
                        <span>
                        <i className="fa-solid fa-angle-down" />
                        </span>
                    </div>
                    </li>
                    <li className="open">
                    <div className="accordion_header flex items-center justify-between">
                        <p>Can I schedule future transfers?</p>
                        <div className="icon">
                        <span>
                            <i className="fa-solid fa-angle-up" />
                        </span>
                        </div>
                    </div>
                    <div className="accordion_content pt-20">
                        <p>
                        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                        Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                        cursus adipiscing gravida et consequat lobortis arcu velit.
                        Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                        molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                        purus gravida adipiscing euismod montes, duis egestas.
                        Vehicula eu etiam quam tristique tincidunt suspendisse ut
                        consequat.
                        </p>
                    </div>
                    </li>
                    <li className="flex items-center justify-between">
                    <p>When can I use Banking App services?</p>
                    <div className="icon">
                        <span>
                        <i className="fa-solid fa-angle-down" />
                        </span>
                    </div>
                    </li>
                    <li className="flex items-center justify-between">
                    <p>
                        Can I create my own password that is easy for me to remember?
                    </p>
                    <div className="icon">
                        <span>
                        <i className="fa-solid fa-angle-down" />
                        </span>
                    </div>
                    </li>
                    <li className="flex items-center justify-between">
                    <p>What happens if I forget or lose my password?</p>
                    <div className="icon">
                        <span>
                        <i className="fa-solid fa-angle-down" />
                        </span>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
    </section>
  )
}

export default FaqSection
