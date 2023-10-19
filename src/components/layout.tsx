import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
//@ts-expect-error
} from './layout.module.css'


//@ts-expect-error
const Layout = ({ pageTitle, children }) => {

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
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/rooms" className={navLinkText}>
              Rooms
              </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/users" className={navLinkText}>
              Users
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/login" className={navLinkText}>
              Log In
            </Link>
          </li>
          
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout