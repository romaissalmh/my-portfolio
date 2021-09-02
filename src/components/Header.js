import React from 'react'
import Typed from 'typed.js';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'



export default function Header({}) {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "web-development.png"}) {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
          }
    }
  `) 
  

    const { fluid } = data.file.childImageSharp

    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
  
    React.useEffect(() => {
          const options = {
              strings: [
              '<h1> I’m Romaissa Kessi.<br/> A web and mobile <br/> developer.</h1>',
          ],
          typeSpeed: 50,
          backSpeed: 50,
          };
          
      // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])
    
    return (
        <div className="header gradient-background flex">
            <Img className="img" style={{padding:"-20px" }} fluid={fluid} />

            <div className="">
             <h1 ref={el} style={{fontSize:"28px", fontWeight:"900"}}  className="header-title"/><br/><br/>

        
                <h2 className="header-subtitle"> I am always highly enthusiastic about my work and love to face challenges in order <br/> to expand my knowledge and skills in IT. </h2>
            </div>
           
              
         </div>
         
          
    
    )
}

