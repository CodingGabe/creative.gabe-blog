import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

import "../scss/index.scss"

// import { rhythm, scale } from "../utils/typography"

const Layout = ({ children }) => (
  <Wrapper>
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </Wrapper>
)

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     const blogPath = `${__PATH_PREFIX__}/blog/`
//     let header

//     if (location.pathname === rootPath || location.pathname === blogPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             margin: 0,
//           }}
//         >
//           <Link to={location.pathname === blogPath ? `/blog/` : `/`}>
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             marginTop: 0,
//           }}
//         >
//           <Link to={`/blog/`}>{title}</Link>
//         </h3>
//       )
//     }
//     return (
//       <Wrapper>
//         <div className="app">
//           <header>{header}</header>
//           <main>{children}</main>
//           <Footer>
//             <p>
//             © {new Date().getFullYear()}, Built in Austin{" "}
//             <span role="img" aria-label="star emoji">
//               🌟
//             </span>
//             {` `}
//             using <a href="https://www.gatsbyjs.org">Gatsby</a>
//             </p>
//           </Footer>
//         </div>
//       </Wrapper>
//     )
//   }
// }

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
