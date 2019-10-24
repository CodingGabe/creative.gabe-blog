import React from 'react'
import { TwitterIcon, GithubIcon, InstagramIcon } from './Icons'

const Footer = () => {
    const renderFooterIcon = (title, link, icon) => (
        <a
      aria-label={title}
      className="footer__link"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      {icon}
    </a>
    )
    return (
        <footer>
            <section>
                <p>
                    © {new Date().getFullYear()}, Built in Austin{" "}
                    <span role="img" aria-label="star emoji">
                    🌟
                    </span>
                    {` `}
                    using <a href="https://www.gatsbyjs.org">Gatsby</a>
                </p>
            </section>
            <section>
                {renderFooterIcon(
                    'Twitter',
                    'https://twitter.com/King_Gabes',
                    <TwitterIcon />
                )}
                {renderFooterIcon(
                    'Instagram',
                    'https://instagram.com/creative.gabe',
                    <InstagramIcon />
                )}
                {renderFooterIcon(
                    'GitHub',
                    'https://github.com/CodingGabe',
                    <GithubIcon />
                )}
            </section>
        </footer>
    )
}

export default Footer;