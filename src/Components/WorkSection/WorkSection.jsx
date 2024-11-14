import React from 'react'
import './workSection.css'

const WorkSection = () => {
  return (
    <section id="work">
      <div className="container flex direction-column items-center">
        <h2 className="text-center mb-30">How Does It Work?</h2>
        <div className="work_images flex gap-30 mt-20">
          <img className="" src="Images/iPhone 12 Pro.png" alt="" />
          <img src="Images/iPhone 12 Pro (2).png" alt="" />
          <img src="Images/iPhone 12 Pro (1).png" alt="" />
        </div>
        <div className="mobile_image">
          <img src="Images/iPhone 12 Pro (1).png" alt="" />
        </div>
        <div className="section_heading mb-30 text-center mt-30">
          <h2>Latest transaction history</h2>
          <p className="mt-10">
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique quisque hac in consectetur condimentum.{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
