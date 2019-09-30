import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'

const ActionPage: React.FC = () => {
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
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/byebuydaychannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: byebuydaychannel
          </Button>
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">抵制 TVB</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://facebook.com/banTVB"
            target="_blank"
            rel="noopener noreferrer"
          >
            FB: noTVB
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/noTVB"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: noTVB
          </Button>
        </Box>
        <Box mt={1}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://facebook.com/sayno2tvb"
            target="_blank"
            rel="noopener noreferrer"
          >
            FB: sayno2tvb
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/sayno2tvb"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: sayno2tvb
          </Button>
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">Twitter 每日任務</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/twitter4HK"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: twitter4HK
          </Button>
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">香港臨時議會</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/hkpporganizationchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: hkpporganizationchannel
          </Button>
        </Box>
        <Box mt={1}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/hkassembly"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: hkassembly
          </Button>
        </Box>
      </Box>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">全港連儂牆</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/lennonwallhk"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: lennonwallhk
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://t.me/Lennonovazed_channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG: Lennonovazed_channel
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ActionPage
