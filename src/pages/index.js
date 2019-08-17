import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import RecipeLink from "../components/recipe-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Recipes = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <RecipeLink key={edge.node.id} recipe={edge.node} />)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to your recipes!</h1>
      <div>{Recipes}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
