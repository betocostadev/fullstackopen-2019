import React from 'react'
import { MessageContainer } from './display-message-container.styles'

const DisplayMessageContainer = ({message, ...props}) => {
  return (
    <MessageContainer {...props}>
      {message}
    </MessageContainer>
  )
}

export default DisplayMessageContainer