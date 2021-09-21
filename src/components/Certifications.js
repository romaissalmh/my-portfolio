import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'




export default function Certifications() {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "settings.png"}) {
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
        <div id="certifications" className="aboutme flex">

            <div data-aos="fade-right" className="padding" style={{ paddingTop:"8rem"}} >
                <h1 className="aboutme-title">Certificates</h1>  <br/><br/>
                <h2 className="text-content"> 
                "Try to learn something about everything and everything about <br/> something." - Thomas H.Huxley -
                </h2><br/>
                <button className="btn">
                    <a target="_blank" rel="noreferrer" href="https://university.mongodb.com/course_completion/0114302c-172d-4ba9-9769-1fb1f4c8fbe1?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing" className="btn" >
                        MongoDB for Javascript Developers</a>
                </button><br/>

                <button className="btn">
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Zjoxe9xo3fWckjVPFG8G-648WtxxMm3K/view" className="btn" >
                    The python programmer bootcamp</a>
                </button><br/>

                <button className="btn">
                    <a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/verify/87FZWTSAEGFW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" className="btn" >
                    Front-End Web UI Frameworks and Tools: Bootstrap 4</a>
                </button><br/>

                <button className="btn">
                    <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/learn/certification/romaissakessi/intro-to-machine-learning" className="btn" >
                    Intro to Machine Learning</a>
                </button><br/>

                <button className="btn">
                    <a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/verify/MAJJXAYV5YHB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" className="btn" >
                    Fondamtentals of scalable Data science IBM</a>
                </button><br/>

                <button className="btn">
                    <a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/verify/LHER9DVNH8S2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" className="btn" >
                    Tools for Data Science</a>
                </button><br/>

             
 
                
            </div>
            <div data-aos="flip-right"  className="img">
            <Img  atl="certifications" fluid={fluid} />
            </div>

        </div>
    )
}
