import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

export default function AboutMe() {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "vision.png"}) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
          }
    }
  `) 

    const { fluid } = data.file.childImageSharp

    return (
        <div id="aboutMe" className="aboutme flex">
            <div className="img" style={{ paddingLeft: "8rem", paddingTop:"8rem"}} >
                <h1 className="aboutme-title"> Get to know me !</h1>  <br/><br/>
                <h2 className="text-content"> 
                I’m a final year computer science student at ESI-Algiers (Or as they call it one of the most prestigious schools in my country) and a future software engineer. I love creating, whether those things are web applications, mobiles apps, articles or just content. Besides, this is one of the main reasons that pushed me to specialize in software engineering. I'm very passionate about backend development and everything about Node.js stack. <br/><br/>
                Being a determined and an extremely analytical lady, I'm always committed to the service of the projects I lay my hands on.  <br/>    <br/>                    
                Always Seeking an opportunity to bring my technical skills to the table.
                </h2><br/>
                <button className="btn">
                    
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/13KQC6kjnJVUF8Xr0Nf-hHIf0QKwhWU7V/view?usp=sharing" className="btn" >
                Download Resume</a>
                    
                  </button>

            </div>
      
            <Img className="img" atl="aboutMe" fluid={fluid} />


        </div>
    )
}
