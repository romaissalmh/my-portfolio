import React from 'react'
import {FaJava, FaJenkins } from 'react-icons/fa';
import {DiMongodb, DiPostgresql,DiMysql,DiHtml5,DiCss3,DiBootstrap,DiGithubBadge,DiPhp,DiNodejsSmall,DiJavascript1} from 'react-icons/di';
import {SiKotlin} from 'react-icons/si';



export default function Skills() {
    return (
        <div id="skills" className="skills" >
             <h1 className="title" style={{paddingLeft:"6rem"}}> Skills</h1> 

            <div className="flex" >
            <img src="/chatbot-bw.png"  className="img" style={{margin:"-40px" }} />
           
            <div style={{marginTop:"4rem"}}>
                <div className="column">

                    <div className="row">
                    <br/> 
                        <div style={{display:"block"}} >
                            <DiHtml5 className="icon"/>  
                            <h4 className="skills-titles" > HTML5</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiCss3 className="icon"/>  
                            <h4 className="skills-titles" > CSS3</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiBootstrap className="icon"/>  
                            <h4 className="skills-titles" > Bootstrap</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiGithubBadge className="icon"/>  
                            <h4 className="skills-titles" > Github</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiPhp className="icon"/>  
                            <h4 className="skills-titles" > PHP</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiJavascript1 className="icon"/>  
                            <h4 className="skills-titles" > Javascript</h4>  
                        </div>
                    </div>
                    <br/>   <br/>  <br/> 

                    <div className="row">

                        <div style={{display:"block"}} >
                            <DiNodejsSmall className="icon"/>  
                            <h4 className="skills-titles" > Node.js</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <FaJava className="icon"/>  
                            <h4 className="skills-titles" > Java</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <FaJenkins className="icon"/>  
                            <h4 className="skills-titles" > Jenkins</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiMysql className="icon"/>  
                            <h4 className="skills-titles" > MySQL</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiMongodb className="icon"/>  
                            <h4 className="skills-titles" > MongoDB</h4>  
                        </div>
                        <div style={{display:"block"}} >
                            <DiPostgresql className="icon"/>  
                            <h4 className="skills-titles" > Kotlin</h4>  
                        </div>
                    </div> <br/>  <br/> 

                    <div className="row">
                        <div style={{display:"block"}} >
                            <SiKotlin style={{ width:"80px", height:"80px", marginLeft:"1rem"}} className="icon"/>  
                            <h4 className="skills-titles" > Kotlin</h4>  
                        </div>
                    </div>

                </div>

            </div>
            </div>  
              
         </div>
    )
}
