import React from 'react'
import Card from "./Card"
import {Link} from 'gatsby'

export default function Projects() {
    return (
        <div id="projects" className="project-container">
             <div className="flex" style={{justifyContent :"space-between", marginLeft:"4rem"}}>

                <div className="column">

                <h1 className="text-content"> MY PROJECTS</h1>  <br/><br/>
                <h2 className="title"> I'm Dedicated To <br/> The Quest Of Creating </h2><br/><br/>
                <Card url="/School_Management.jpg" name="School Management" description="A web application that aims to facilitate the school services . I have worked with php as a programming language, mysql for database management according to the MVC pattern." />
                <Card url="/El_chater.jpg" name="El chater" description="An educational mobile application dedicated to primary students.I collaborated with my binome in making the UI side of the application using React Native. As for the server side, I created the REST API using Node.JS and Expres.JS and MongoDB." />

                </div>

                <div className="column">
                <Card url="/autolib-dz.jpg" name="Autolib Rental App" description="A software solution for managing a company's fleet of self-service cars. This solution must allow the management of the cars equipped with an on-board computer by monitoring them as well as managing their rental by customer." />
                <Card url="/DoctorMe.png" name="DoctorMe" description="A medical appointment application for doctors. Doctors can login, scan a QRCode and get all details of an appointment. He can view the list of appointments . He also receives a notification each time an appointment is created. " />
                <Link to="/projects" style={{ border: "1px solid white"}} className="btn-outliner">VIEW ALL PROJECTS</Link>


                </div>
             </div>
            
        </div>
    )
}
