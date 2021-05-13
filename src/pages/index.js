import React from "react"
import { Link, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>

          <ReactMarkdown children={document.node.content} />
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
`
