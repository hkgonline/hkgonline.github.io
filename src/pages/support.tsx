import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'
import { TelegramButton } from '../components/ExternalLinkButton'

const SupportPage: React.FC = () => {
  const title = '支援服務'

  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box component="section" m={2} mb={4}>
        <Box component="header" mb={1}>
          <Typography variant="h4">被捕支援</Typography>
        </Box>
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell>
                反送中傷者被捕者人道支援基金 / <br />
                612人道支援基金
              </TableCell>
              <TableCell>9845-6641 (致電 / SMS)</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>星火同盟律師</TableCell>
              <TableCell>9819-0979</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                民間人權陣線 / <br />
                民陣
              </TableCell>
              <TableCell>6549-9452 (Telegram / SMS / WhatsApp)</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>民權觀察法律支援</TableCell>
              <TableCell>9463-2945 (Telegram / SMS / WhatsApp only)</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>韋智達律師行</TableCell>
              <TableCell>9167-7091</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>港大</TableCell>
              <TableCell>
                9139-0589
                <br />
                <br />
                <TelegramButton tgid="hkusulegal" />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>中大</TableCell>
              <TableCell>9443-3459</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>科大</TableCell>
              <TableCell>
                6019-6339 /<br />
                2335-1732 /<br />
                2335-5672
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>理大</TableCell>
              <TableCell>
                6800-0560 /<br />
                2766-7025 /<br />
                6253-2359
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>城大</TableCell>
              <TableCell>
                9545-4172 /<br />
                3442-5570
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>浸大</TableCell>
              <TableCell>6110-3860</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>教大</TableCell>
              <TableCell>5108-3519</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>演藝學院</TableCell>
              <TableCell>
                6679-0772 /<br />
                9464-5078
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  )
}

export default SupportPage
