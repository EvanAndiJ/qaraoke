import React, {
  useState,
} from "react"

import { StaticImage } from 'gatsby-plugin-image'
import { 
  Link, 
  useStaticQuery, 
  graphql,
  navigate,
} from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import type { HeadFC, PageProps } from "gatsby"

import {
  container,
  header,
  title,
  subtitle,
  startButtons,
// @ts-expect-error
} from './home.module.css'

const IndexPage = () => {

  const [search, setSearch] = useState('')

  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

  return (
    <div>
      <header>
        <h1 className={title}>{meta.site.siteMetadata.title}</h1>
        <h6 className={subtitle}>The easy way to sing</h6>
      </header>
    
      <main>
        <input type="text" placeholder="Find a Room"
          value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div>
          <button onClick={()=>navigate('/rooms')}>Browse Rooms</button>
          <button onClick={()=>navigate('/login')}>Log In</button>
        </div>
        {/* <h1>{pageTitle}</h1>
        {children} */}
      </main>
    </div>
  )
}



export const Head = () => <Seo title="Home" />

export default IndexPage
