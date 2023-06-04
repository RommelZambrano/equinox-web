import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}  

const ContactPage = ({
  data: {
    site
  },
}) => {
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  const [state, setState] = React.useState({})

  return (
    <Layout>
      <Helmet>
        <title>Contact Us — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>

      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/telephone.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Contact Us</h1>
          <p><a href="mailto:info@thedeptek.com">info@thedeptek.com</a></p>
          <p><a href="tel:+17867908720">+1 (786)790-8720</a></p>
          <p>Address: 2655 Lejeune Road Suit 902 Coral Gables, FL 33134</p>
          <div className="">
            <iframe className="map" title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.2547890273067!2d-80.2649842407598!3d25.743592152950463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b790e2626c55%3A0x3fd119306dc52914!2s2655%20S%20Le%20Jeune%20Rd%20%23902%2C%20Coral%20Gables%2C%20FL%2033134!5e0!3m2!1sfr!2sus!4v1637708128719!5m2!1sfr!2sus"
            loading="lazy"
            width={300}
            height={300}
          />
          </div>
        </div>
        <div>
        <form 
          name="contact-form-deptek" 
          className="form-container" 
          action="/thanks" 
          method="POST" 
          data-netlify="true" 
          honeypot="bot-field"
          onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          <div>
            <input type="text" name="name" id="name" placeholder="Name" data-validation-required-message="Please enter your name." required onChange={handleChange}/>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" required onChange={handleChange}/>
          </div>
          <div>
            <input type="text" name="subject" id="w3lSubject" placeholder="Subject" required onChange={handleChange}/>
          </div>
          <div>
            <textarea name="message" id="message" placeholder="Enter here your message..." required onChange={handleChange}></textarea>
          </div>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <input type="submit" name="submit" className="button primary" style={{marginRight: 0}} />
          </div>
        </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`