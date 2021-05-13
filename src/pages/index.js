import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  color: rebeccapurple;
`

const Index = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Personal Toughts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogLink to={node.fields.slug}>
          <div key={node.id}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
            <p>{node.excerpt}</p>
          </div>
        </BlogLink>
      ))}
    </div>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
