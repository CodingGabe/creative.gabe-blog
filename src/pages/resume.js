import React from "react"
import Wrapper from "../components/layout"
import Button from "../components/button"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "../scss/index.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(absolutePath: { regex: "/resume-dev.jpg/" }) {
        childImageSharp {
            fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div className="u-flex_row">
        <h1 style={{ marginBottom: "20px" }}>My Resume</h1>
        <Image
            fixed={data.resume.childImageSharp.fixed}
            alt="Resume 2019"
        />
        <a href="https://drive.google.com/file/d/1M_44Nc8bL4zBnnIdS9I8LZuWX4RXStY_/view?usp=sharing" target="_blank">
          <Button marginTop="35px">Download</Button>
        </a>
      </div>
    </Wrapper>
  )
}