import { Box, Typography } from '@material-ui/core'
import { differenceInDays } from 'date-fns'
import React from 'react'
import CountUp from 'react-countup'

const DurationLabel: React.FC = () => {
  const startDate = new Date(2019, 5, 9)
  const days = differenceInDays(new Date(), startDate) + 1
  return (
    <Box textAlign="center">
      <Box m={1} fontSize="body1.fontSize">自 6 月 9 日起</Box>
      <Typography variant="h3">
        第&nbsp;<CountUp end={days} />&nbsp;日
      </Typography>
      <Box m={1} fontSize="body1.fontSize">香港人仲抗爭緊</Box>
    </Box>
  )
}

export default DurationLabel
