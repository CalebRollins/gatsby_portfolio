import React from 'react';
import Page from '../components/page.js';
import { Link } from 'gatsby';
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Page>
      <h2>Blog</h2>
      <hr/>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </h3>
          <p><em>{node.frontmatter.date}</em></p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Page>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`