import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

//@ts-expect-error
const Seo = ({ title }) => {
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
    <title>{title === 'Home' ? `Let's Sing!` : title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo