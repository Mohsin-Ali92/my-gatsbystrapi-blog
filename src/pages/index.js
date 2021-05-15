import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
          <StaticImage
            src="https://res.cloudinary.com/dtiinb4c0/image/upload/v1620902741/my_blog1_1db7402bdd.png"
            width={900}
            height={500}
            quality={95}
            loading="lazy"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
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
          image {
            id
            url
          }
        }
      }
    }
  }
`
