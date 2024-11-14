import React from 'react'
import FaqSection from '../FAQSection/FaqSection'
import NewsLetterSection from '../NewsLetterSection/NewsLetterSection'
import FooterCopyrightSection from '../FooterCopyrightSection/FooterCopyrightSection'

const Footer = () => {
  return (
    <footer>
        <FaqSection/>
        <NewsLetterSection/>
        <FooterCopyrightSection/>
    </footer>
  )
}

export default Footer
