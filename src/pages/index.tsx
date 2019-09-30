import { Box, Button } from '@material-ui/core'
import { graphql, Link } from 'gatsby'
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
      <Box textAlign="center">
        <DurationLabel />
        <Box mt={2}>
          <Button variant="outlined" component={Link} to="/action">
            兄弟爬山
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default IndexPage
