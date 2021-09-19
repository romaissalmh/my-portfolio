import React from "react"
import AboutMe from "../components/AboutMe"
import Certifications from "../components/Certifications"
import ContactMe from "../components/ContactMe"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
    once: false, // whether animation should happen only once - while scrolling down
    offset:30,
    duration:1000

});

export default function Home() {
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
