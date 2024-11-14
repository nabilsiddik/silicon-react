import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import BrandSection from '../../Components/BrandSection/BrandSection'
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection'
import WorkSection from '../../Components/WorkSection/WorkSection'
import CtaSection from '../../Components/CTASection/CtaSection'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <FeaturesSection/>
      <WorkSection/>
      <CtaSection/>
      <TestimonialSection/>
    </div>
  )
}

export default Home
