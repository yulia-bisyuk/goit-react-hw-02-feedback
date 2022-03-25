import styled from 'styled-components';



export const Button = styled.button`
  width: 100px;
  height: 32px;
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${props => props.backgroundColor};
  background-color: white;
  color: ${props => props.backgroundColor};
  font-size: 16px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:hover {
    color: white;
    background-color: ${props => props.backgroundColor};
  }
`;
