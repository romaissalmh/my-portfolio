import React from 'react'
import {FaInstagram,FaFacebookF,FaLinkedinIn,FaGithubAlt} from 'react-icons/fa';
import { VscMail } from "react-icons/vsc";
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby-link'


function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default function ContactMe() {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "blogging.png"}) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
          }
    }
  `) 
  

    const { fluid } = data.file.childImageSharp
    const [state, setState] = React.useState({})

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

    return (
        <div id="contact" className="contact flex" style={{backgroundColor:"black",paddingTop:"8rem"}}>

            <div  className="img"style={{justifyContent:"center"}}>
                 <h1 className="title"> Let's talk </h1>  <br/><br/>
                 <h2 className="text-content"> Get a question or a proposal, or just want <br/> to say hi? Go ahead. </h2>
                            
                 <br/>
                 <ul className="social-icons">
                    <li>
                        <a className="link" target="_blank"  href="https://www.instagram.com/l_m_h_romaissa/" rel="noreferrer">
                            <FaInstagram className="social-icon"/>          
                        </a> 
                    </li>

                    <li>
                        <a className="link" target="_blank"  href="https://www.linkedin.com/in/kessiromaissa/" rel="noreferrer">
                            <FaLinkedinIn className="social-icon"/>          
                        </a> 
                    </li>

                    <li>
                        <a className="link" target="_blank"  href="https://www.facebook.com/Romaissalmh/" rel="noreferrer">
                            <FaFacebookF className="social-icon"/>          
                        </a> 
                    </li>
                    
                    <li>
                        <a className="link" target="_blank"  href="https://github.com/romaissalmh" rel="noreferrer">
                            <FaGithubAlt className="social-icon"/>          
                        </a> 
                    </li>

                    <li>
                        <a className="link" target="_blank"  href="https://www.instagram.com/l_m_h_romaissa/" rel="noreferrer">
                            <VscMail className="social-icon"/>          
                        </a> 
                    </li>
                </ul>
                <Img  atl="contactMe" fluid={fluid}  className="img"/>


            </div>

              <form className="img" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>
                    <label className="text-label"> Name</label>
                    <input type="text" id="name" name="name" placeholder="" onChange={handleChange}/>

                    <label className="text-label">Email</label>
                    <input type="text" id="email" name="email" placeholder=""  onChange={handleChange}/>

                    <label className="text-label">Message</label>
                    <textarea type="text" id="message" name="message" placeholder=""/>
                
                    <input className="btn-1" type="submit" value="SAY HI !"/>
                </form>
                







          
        </div>
    )
}
