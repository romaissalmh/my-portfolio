import React from "react"
import AboutMe from "../components/AboutMe"
import Certifications from "../components/Certifications"
import ContactMe from "../components/ContactMe"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useEffect } from 'react';


export default function Home() {
    let AOS;

    useEffect(() => {
        /**
         * Server-side rendering does not provide the 'document' object
         * therefore this import is required either in useEffect or componentDidMount as they
         * are exclusively executed on a client
         */
        const AOS = require("aos");
        AOS.init({
            once: false, // whether animation should happen only once - while scrolling down
            offset:30,
            duration:1000
        });
      }, []);
    
      useEffect(() => {
        if (AOS) {
          AOS.refresh();
        }
      });
  return (
  <Layout>
      <Header/>
      <AboutMe/>
      <Skills/> 
      <Projects/> 
      <Certifications/> 
      <ContactMe/> 
  </Layout>

      )
}
