import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <Link to="/">
                <img className={headerStyles.imagem} src="https://raw.githubusercontent.com/the-akira/contentful-gatsby/master/src/images/alchemyart.jpg" alt="header-img" />
            </Link>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to="/"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to="/blog"
                        >
                        Blog
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to="/about"
                        >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to="/contact"
                        >
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header