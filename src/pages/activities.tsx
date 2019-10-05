import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  FacebookButton,
  TelegramButton,
} from '../components/ExternalLinkButton'

const ActivitiesPage: React.FC = () => {
  const title = '逆權活動'

  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">Bye Buy Day</Typography>
        </Box>
        <Box>
          <TelegramButton tgid="byebuydaychannel" />
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">抵制 TVB</Typography>
        </Box>
        <Box>
          <FacebookButton fbid="noTVB" />
          &nbsp;
          <TelegramButton tgid="noTVB" />
        </Box>
        <Box mt={1}>
          <FacebookButton fbid="sayno2tvb" />
          &nbsp;
          <TelegramButton tgid="sayno2tvb" />
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">Twitter 每日任務</Typography>
        </Box>
        <Box>
          <TelegramButton tgid="twitter4HK" />
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">香港臨時議會</Typography>
        </Box>
        <Box>
          <TelegramButton tgid="hkpporganizationchannel" />
          &nbsp;
          <TelegramButton tgid="hkassembly" variant="chat" />
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">全港連儂牆</Typography>
        </Box>
        <Box>
          <TelegramButton tgid="Lennonovazed_channel" />
          &nbsp;
          <TelegramButton tgid="lennonwallhk" variant="chat" />
        </Box>
      </Box>
    </Box>
  )
}

export default ActivitiesPage
