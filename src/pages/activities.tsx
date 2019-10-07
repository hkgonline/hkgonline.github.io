import { Box, Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  FacebookButton,
  TelegramButton,
} from '../components/ExternalLinkButton'

const ActivitiesPage: React.FC = () => {
  const title = '逆權活動'
  const data = useStaticQuery(graphql`
    query ActivitiesQuery {
      allActivitiesYaml {
        nodes {
          id
          title
          facebook {
            id
          }
          telegram {
            id
            to
          }
        }
      }
    }
  `)
  const activities = data.allActivitiesYaml.nodes

  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {activities.map(o => (
        <Box key={o.id} component="section" m={2} mb={4}>
          <Box component="header" mb={1}>
            <Typography variant="h4">{o.title}</Typography>
          </Box>
          {o.facebook && (
            <Box mt={1}>
              {o.facebook.map(x => (
                <Box key={x.id} mr={1} clone>
                  <FacebookButton fbid={x.id} />
                </Box>
              ))}
            </Box>
          )}
          {o.telegram && (
            <Box mt={1}>
              {o.telegram.map(x => (
                <Box key={x.id} mr={1} clone>
                  <TelegramButton tgid={x.id} to={x.to ? x.to : 'channel'} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default ActivitiesPage
