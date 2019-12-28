import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
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
      <div className="u-flex_row">
        {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;

            return (
                <ProjectPreview
                    title={title}
                    description={description}
                    slug={slug}
                    imageData={imageData}
                />
            )
        })}
      </div>
    </Layout>
  )
}