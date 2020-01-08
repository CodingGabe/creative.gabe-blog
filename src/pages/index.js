import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gabe Amaya - Journal"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="container">
        <h1>
          Front-End Web Developer{" "}
          <span role="img" aria-label="fire emoji">
           🔥
          </span>
        </h1>
        <h3 className="sub-heading">
          Austin, Texas
          <span role="img" aria-label="pin emoji">
          📍
          </span>
        </h3>
        <p>
          My name is <strong>Gabe</strong>, and I'm a <a href="https://dev.to/emmawedekind/ux-engineering-3hem">UX Engineer</a> (Design &amp; Front-End) it's still a new title so I still go by Front-End Web Dev.
        </p>
        <p>I love to be creative and code things to build compelling digital experiences <span role="img" aria-label="diamond emoji">💎</span></p>
        <Link to="/blog/" ClassName="btn">
          <Button marginTop="35px">My Journal</Button>
        </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
