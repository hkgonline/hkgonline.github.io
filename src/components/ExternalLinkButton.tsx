import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook'
import TelegramIcon from '@material-ui/icons/Telegram'
import React from 'react'

const ExternalLinkButton = React.forwardRef<
  HTMLAnchorElement,
  ButtonProps<'a'>
>(props => {
  return (
    <Button
      variant="contained"
      color="primary"
      target="_blank"
      {...props}
      component="a"
      rel="noopener noreferrer"
    />
  )
})

export const FacebookButton = React.forwardRef<
  HTMLAnchorElement,
  ButtonProps<'a'> & { fbid: string }
>(({ children, fbid, ...props }) => {
  return (
    <ExternalLinkButton {...props} href={`https://facebook.com/${fbid}`}>
      <FacebookIcon /> {fbid}
    </ExternalLinkButton>
  )
})

export const TelegramButton = React.forwardRef<
  HTMLAnchorElement,
  ButtonProps<'a'> & { tgid: string; variant?: 'channel' | 'chat' }
>(({ children, tgid, variant = 'channel', ...props }) => {
  const color = variant === 'chat' ? `secondary` : `primary`
  const url =
    variant === 'chat' ? `https://t.me/${tgid}` : `https://t.me/s/${tgid}`
  return (
    <ExternalLinkButton color={color} {...props} href={url}>
      <TelegramIcon /> {tgid}
    </ExternalLinkButton>
  )
})

export default ExternalLinkButton
