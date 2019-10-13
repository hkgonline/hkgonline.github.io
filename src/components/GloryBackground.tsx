import { Box, Fab, Link } from '@material-ui/core'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import normalizeUrl from 'normalize-url'
import React from 'react'
import Player from 'react-player'

const GloryBackground: React.FC = () => {
  const [playing, setPlaying] = React.useState(true)
  const [canPause, setCanPause] = React.useState(false)
  const url = 'https://www.youtube.com/watch?v=oUIDL4SB60g'

  return (
    <Box position="absolute" top={0} left={0} width="100%" height="100%">
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bgcolor="rgba(0, 0, 0, 0.9)"
        style={{
          background:
            'radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)',
        }}
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        color="gray"
      >
        <Box display="inline-block" m={1}>
          <Link
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
          >
            {normalizeUrl(url, { stripProtocol: true })}
          </Link>
        </Box>
        <Fab
          size="small"
          onClick={() => {
            setPlaying(!playing)
          }}
        >
          {canPause ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </Fab>
      </Box>
      <Player
        url={url}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
            },
            preload: true,
          },
        }}
        playing={playing}
        controls
        loop
        width="100%"
        height="100%"
        onReady={() => {}}
        onPlay={() => {
          setCanPause(true)
        }}
        onPause={() => {
          setCanPause(false)
        }}
        onError={() => {}}
        onEnded={() => {}}
      />
    </Box>
  )
}

export default GloryBackground
