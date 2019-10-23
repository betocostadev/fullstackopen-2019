import styled, { css } from 'styled-components'

const confirmMessage = css`
  background: green;
`

const errorMessage = css`
  background: red;
`

const getStyles = props => {
  if(props.messageStyle === 'confirmMessage') {
    return confirmMessage
  }
  if(props.messageStyle === 'errorMessage') {
    return errorMessage
  }
}

export const MessageContainer = styled.p`
  border-radius: 5px;
  margin: 0.5rem 0 0.5rem 1rem;
  max-width: 50vw;
  padding: 1rem;
  color: white;
  font-weight: bold;
  ${getStyles}
`

