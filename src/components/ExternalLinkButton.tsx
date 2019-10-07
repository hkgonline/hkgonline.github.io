import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook'
import TelegramIcon from '@material-ui/icons/Telegram'
import React from 'react'

const ExternalLinkButton: React.FC<ButtonProps<'a'>> = props => (
  <Button
    variant="contained"
    color="primary"
    target="_blank"
    {...props}
    component="a"
    rel="noopener noreferrer"
  />
)

export const FacebookButton: React.FC<ButtonProps<'a', { fbid: string }>> = ({
  children,
  fbid,
  ...props
}) => (
  <ExternalLinkButton {...props} href={`https://facebook.com/${fbid}`}>
    <FacebookIcon /> {fbid}
  </ExternalLinkButton>
)

export const TelegramButton: React.FC<
  ButtonProps<'a', { tgid: string; to?: 'channel' | 'chat' }>
> = ({ children, tgid, to = 'channel', ...props }, ref) => {
  const color = to === 'chat' ? `secondary` : `primary`
  const url = to === 'chat' ? `https://t.me/${tgid}` : `https://t.me/s/${tgid}`
  return (
    <ExternalLinkButton color={color} {...props} href={url}>
      <TelegramIcon /> {tgid}
    </ExternalLinkButton>
  )
}

export default ExternalLinkButton
