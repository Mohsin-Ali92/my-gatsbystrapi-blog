import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    <StaticImage
      src={
        "https://res.cloudinary.com/dtiinb4c0/image/upload/v1620902741/my_blog1_1db7402bdd.png"
      }
      alt=""
    />
    <ReactMarkdown children={data.strapiArticle.content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content

      author {
        id
        username
      }
    }
  }
`
