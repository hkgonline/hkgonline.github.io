import { graphql } from 'gatsby'
import React from 'react'

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return <h1>{data.site.siteMetadata.title}</h1>
}

export default IndexPage
