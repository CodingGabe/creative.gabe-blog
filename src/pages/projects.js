import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ProjectPreview from "../components/ProjectPreview"

import "../scss/index.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
        allProjectsJson {
            edges {
              node {
                title
                url
                description
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
  `)

  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
     <SEO title="Projects" />
     <h2 className="outrun-title">
          Projects
      </h2>
      <div className="project_preview--wrapper">
        {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;
            const url = project.url;

            return (
                <ProjectPreview
                    title={title}
                    description={description}
                    slug={slug}
                    imageData={imageData}
                    url={url}
                />
            )
        })}
      </div>
      <a href="https://github.com/CodingGabe?tab=repositories" target="_blank" aria-label="all projects" rel="noopener noreferrer">
          <Button>
            View All Projects
          </Button>
        </a>
    </Layout>
  )
}