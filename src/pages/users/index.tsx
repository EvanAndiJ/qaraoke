import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

//@ts-expect-error
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Users">
        <p>LIST OF USERS GOES HERE</p>
      {

        // ---- OLD TUTORIAL STUFF FOR REF ----
        // data.allMdx.nodes.map(
        //     //@ts-ignore
        //     (node) => (
        //   <article key={node.id}>
        //     <h2>
        //       <Link to={`/blog/${node.frontmatter.slug}`}>
        //         {node.frontmatter.title}
        //       </Link>
        //     </h2>
        //     <p>Posted: {node.frontmatter.date}</p>
        //     <p>{node.excerpt}</p>
        //   </article>
        // ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="" />

export default BlogPage