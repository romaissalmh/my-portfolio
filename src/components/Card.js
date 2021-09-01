import React from 'react'

export default function Card(props) {
    return (
        
        <div className="card ">
            <img src={props.url} className="card__background" style={{width:"100%",height:"500px"}}/>
            <div className="container">
                <h4 className="card-title"><b>{props.name}</b></h4><br/>
                <p className="text-content" style={{ lineHeight: "150%"}} > {props.description} </p>
            </div>
        </div>
    )
}

