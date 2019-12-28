import React from "react"
import Layout from "../components/layout"
import ProjectPreview from "../components/ProjectPreview";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectPage = ({ data: { projectsJson: project } }) => (
  <Layout>
    <ProjectPreview
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      tags={project.tags}
      url={project.url}
    />
  </Layout>
);

export default ProjectPage;