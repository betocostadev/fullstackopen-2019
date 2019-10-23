import styled, { css } from 'styled-components';

const isAddStyles = css`
  border-radius: 10%;

  &:hover {
    background: lightgreen;
    color: white;
    font-weight: bold;
  }
`

const isRemoveStyles = css`
  margin: 0 0 0.2rem 0.6rem;
  border-radius: 5%;

  &:hover {
    background: lightcoral;
    color: white;
    font-weight: bold;
  }
`

const isCloseStyles = css`
  margin: 0 0 0.2rem 0.25rem;
  border-radius: 50%;
  vertical-align: middle;
  font-weight: bold;
  line-height: 25px;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    background: lightcoral;
    color: white;
}
`

const getButtonStyles = props => {
  if (props.isAdd) {
    return isAddStyles
  }
  if(props.isRemove) {
    return isRemoveStyles
  }
  if(props.isClose) {
    return isCloseStyles
  }
}

export const CustomButtonContainer = styled.button`
  background: white;
  border: none;
  box-shadow: 1px 1px 1px 1px #999;
  cursor: pointer;
  ${getButtonStyles}
`