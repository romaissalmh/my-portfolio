import React from 'react'

export default function Card(props) {
    return (
        
        <div className="card" >
            <img alt="card_img" src={props.url} style={{objectFit:"cover", height:"auto", width:"100%"}}/>
            <div className="container">
                <h4 className="card-title"><b>{props.name}</b></h4><br/>
                <p className="text-content" style={{ lineHeight: "150%"}} > {props.description} </p>
            </div>
        </div>
    )
}

