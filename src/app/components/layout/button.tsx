import styled from "styled-components";

export const RoundedButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 99px;
  padding: 0.5em;
  font-size: 14px;
  font-weight: 600;
  background-color: #fff;
  
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;