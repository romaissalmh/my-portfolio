import React from 'react'
import Typed from 'typed.js';



export default function Header() {

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
            <img src="/web-development.png" alt="header-image" className="img" style={{margin:"-20px" }} />
            <div className="">
             <h1 ref={el} style={{fontSize:"35px", fontWeight:"900"}}  className="header-title"/><br/><br/>

        
                <h2 className="header-subtitle"> I am always highly enthusiastic about my work and love to face challenges in order <br/> to expand my knowledge and skills in IT. </h2>
            </div>
           
              
         </div>
         
          
    
    )
}
