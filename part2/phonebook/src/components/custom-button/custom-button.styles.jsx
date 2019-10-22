import styled, { css } from 'styled-components';

const isAddStyles = css`
  border-radius: 20%;
  border: none;
  box-shadow: 1px 1px 1px 1px #999;
  font-weight: bold;
  background: white;

  &:hover {
    background: lightgreen;
    color: white;
  }
`

const isRemoveStyles = css`
  margin: 0 0 0.2rem 0.5rem;
  border-radius: 10%;
  border: none;
  box-shadow: 1px 1px 1px 1px #999;
  font-weight: bold;
  background: white;

  &:hover {
    background: lightcoral;
    color: white;
  }
`

const getButtonStyles = props => {
  if (props.isAdd) {
    return isAddStyles;
  }
  if(props.isRemove) {
    return isRemoveStyles;
  }
}

export const CustomButtonContainer = styled.button`
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  ${getButtonStyles}
`