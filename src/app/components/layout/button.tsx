import styled from "styled-components";

export const RoundedButton = styled.button`
  border: 1px solid #444;
  border-radius: 99px;
  padding: 0.5em;
  font-size: 14px;
  font-weight: 600;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#222"};
  color: ${props => props.textColor ? props.textColor : "#b0b0b0"};
  
  &:hover {
    cursor: pointer;
    background-color: ${props => props.hoverBackgroundColor ? props.hoverBackgroundColor : "#333"};
  }
`;