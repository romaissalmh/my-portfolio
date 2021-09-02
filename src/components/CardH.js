import React from 'react'
import { FiGithub } from "react-icons/fi";
import Img from "gatsby-image"

export default function CardH(props) {
    return (
        
        <div className="cardH flex">
             <Img fluid={props.url} className="img" style={{height:"450px"}}/>

            <div className="container img">
                <h4 className="card-title" style={{fontSize:"24px"}}><b>{props.name}</b></h4><br/>
                <p className="text-content" style={{ lineHeight: "150%"}} > {props.description} </p><br/><br/>
                <button className="btn-opacity" disabled >Tech Stack : {props.stack} </button><br/>
                <button className="btn white" >  <a>  Github Link Front-end <FiGithub size="15px"/> </a> </button><br/>
                <button className="btn white" >   <a> Github Link Back-end <FiGithub size="15px"/></a> </button>
              
            </div>
        </div>
    )
}

