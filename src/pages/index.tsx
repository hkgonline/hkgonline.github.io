import { Box } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import DurationLabel from '../components/DurationLabel'

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
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      pb={5}
    >
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <DurationLabel />
    </Box>
  )
}

export default IndexPage
