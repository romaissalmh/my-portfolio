import React from 'react'
import {FaJava, FaJenkins } from 'react-icons/fa';
import {DiMongodb, DiPostgresql,DiMysql,DiHtml5,DiCss3,DiBootstrap,DiGithubBadge,DiPhp,DiNodejsSmall,DiJavascript1} from 'react-icons/di';
import {SiKotlin} from 'react-icons/si';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'



export default function Skills() {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "chatbot-bw.png"}) {
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
        <div id="skills" className="skills" >
             <h1 className="title" style={{paddingLeft:"6rem"}}> Skills</h1> 

            <div className="flex" >
            <div className="img" data-aos="fade-right">
                 <Img  atl="certifications" fluid={fluid} style={{padding:"-40px" }}  />
            </div>

            <div data-aos="flip-left" style={{marginTop:"4rem"}}>

                    <br/> 
                    <div className="grid-container">

                        <div className="grid-item">
                            <DiHtml5 className="icon"/>  
                            <h4 className="skills-titles" > HTML5</h4>  
                        </div>
                        <div className="grid-item">
                            <DiCss3 className="icon"/>  
                            <h4 className="skills-titles" > CSS3</h4>  
                        </div>
                        <div className="grid-item">
                            <DiBootstrap className="icon"/>  
                            <h4 className="skills-titles" > Bootstrap</h4>  
                        </div>
                       

                        <div className="grid-item">
                            <DiGithubBadge className="icon"/>  
                            <h4 className="skills-titles" > Github</h4>  
                        </div>
                        <div className="grid-item">
                            <DiPhp className="icon"/>  
                            <h4 className="skills-titles" > PHP</h4>  
                        </div>
                        <div className="grid-item">
                            <DiJavascript1 className="icon"/>  
                            <h4 className="skills-titles" > Javascript</h4>  
                        </div>

                  

                        <div className="grid-item">
                            <DiNodejsSmall className="icon"/>  
                            <h4 className="skills-titles" > Node.js</h4>  
                        </div> 
                        <div className="grid-item">
                            <FaJava className="icon"/>  
                            <h4 className="skills-titles" > Java</h4>  
                        </div>
                        <div className="grid-item">
                            <FaJenkins className="icon"/>  
                            <h4 className="skills-titles" > Jenkins</h4>  
                        </div>
                        <div className="grid-item">
                            <DiMysql className="icon"/>  
                            <h4 className="skills-titles" > MySQL</h4>  
                        </div>
                        <div className="grid-item">
                            <DiMongodb className="icon"/>  
                            <h4 className="skills-titles" > MongoDB</h4>  
                        </div>
                        <div className="grid-item">
                            <DiPostgresql className="icon"/>  
                            <h4 className="skills-titles" > PostgreSQL</h4>  
                        </div>
                 

                        <div >
                            <SiKotlin style={{ marginLeft:"4rem"}} className="icon"/>  
                            <h4 className="skills-titles" > Kotlin</h4>  
                        </div>
                    </div>

            

            </div>
            </div>  
              
         </div>
    )
}
