import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import { TwitterIcon, GithubIcon, CodepenIcon } from './Icons'
import '../scss/index.scss'

const Header = () => (
  <header>
    <Helmet>
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta content-type="text/html" charset="utf-8" />
      <meta content="width=device-width initial-scale=1.0" name="viewport" />
      <meta
        content="I love to creative and code things to build compelling digital experiences."
        name="Description"
      />
      <meta content="NOODP" name="googlebot" />
      <meta property="og:url" content="https://gabeamaya.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gabe Amaya - Journal" />
      <meta
        property="og:image"
        content=""
      />
      <meta
        property="og:description"
        content="I love to creative and code things to build compelling digital experiences."
      />
      <meta roperty="og:image:width" content="500" />
      <meta property="og:image:height" content="325" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@king_gabes" />
      <meta property="twitter:title" content="Gabe Amaya - Journal" />
      <meta
        property="twitter:image"
        content=""
      />
      <meta
        property="twitter:image:alt"
        content=""
      />
      <meta
        property="twitter:description"
        content="I love to creative and code things to build compelling digital experiences."
      />
      <link
        href="favicon.png"
        rel="shortcut icon"
        type="image/png"
        data-icon-attribution="Icon from Twemoji (https://twemoji.twitter.com/) and licensed CC BY 4.0"
      />
    </Helmet>
    <Link to="/" className="nav__link">
      home
    </Link>
    <nav>
      <Link
        to="/blog"
        className="nav__link"
        activeClassName="nav__link--active"
      >
        journal
      </Link>
    </nav>
  </header>
)

export default Header;