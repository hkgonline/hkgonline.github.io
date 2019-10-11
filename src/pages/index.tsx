import { Box, Button } from '@material-ui/core'
import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import DurationLabel from '../components/DurationLabel'
import GloryBackground from '../components/GloryBackground'

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
      pb={4}
    >
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <GloryBackground />
      <Box textAlign="center" zIndex={1}>
        <DurationLabel />
        <Box mt={2}>
          <Button variant="outlined" component={Link} to="/activities">
            兄弟爬山
          </Button>
          &nbsp;
          <Button variant="outlined" component={Link} to="/support">
            齊上齊落
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default IndexPage
