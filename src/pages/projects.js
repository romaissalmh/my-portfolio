import React from 'react'
import CardH from '../components/CardH'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


export default function projects( {data}) {
    console.log(data)
    const projects = data.projects.nodes

    return (
        <Layout>
             <div className="" style={{paddingLeft:"10%", paddingRight:"10%",backgroundColor:"black",paddingTop:"8rem", paddingBottom:"8rem"}}>
             <h1 className="title" style={{textAlign:"center", paddingBottom:"8rem"}} >Projects</h1> <br/><br/>
                    {projects.map(project => (
                 
                  <CardH stack={ project.frontmatter.stack} url={ project.frontmatter.thumb} name={ project.frontmatter.title } description={project.frontmatter.description} githubback={project.frontmatter.github_back} githubfront={project.frontmatter.github_front} />

                ))}

             </div>
               
         </Layout>
    )
}



export const query = graphql`
  query ProjectsPage {
    projects : allMarkdownRemark {
      nodes {
        frontmatter {
          description
          stack
          thumb
          title
          github_front
          github_back
        }
      }
    }
  }
  `