import React from 'react'
import {FaInstagram,FaFacebookF,FaLinkedinIn,FaGithubAlt} from 'react-icons/fa';
import { VscMail } from "react-icons/vsc";

export default function ContactMe() {
    return (
        <div id="contact" className="contact flex" style={{backgroundColor:"black",paddingTop:"8rem"}}>

            <div className="" style={{justifyContent:"center"}}>
                 <h1 className="title"> Let's talk </h1>  <br/><br/>
                 <h2 className="text-content"> Get a question or a proposal, or just want <br/> to say hi? Go ahead. </h2>
                            
                 <br/>
                 <ul class="social-icons">
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
                <img src="/blogging.png" className="img" />

            </div>

              <form action="/action_page.php">
                    <label className="text-label" for="name"> Name</label>
                    <input type="text" id="name" name="name" placeholder=""/>

                    <label className="text-label" for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder=""/>

                    <label className="text-label" for="message">Message</label>
                    <textarea type="text" id="message" name="message" placeholder=""/>
                
                    <input className="btn-1"  type="submit" value="SAY HI !"/>
                </form>
                







          
        </div>
    )
}
