import React from "react"
import AboutMe from "../components/AboutMe"
import Certifications from "../components/Certifications"
import ContactMe from "../components/ContactMe"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

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
