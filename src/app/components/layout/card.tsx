import styled from "styled-components";

const Card = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  background-color: #222;
  border: 1px solid #444;
  border-radius: 5px;
  
  &:hover {
    border-color: ${props => props.canHover ? "#888" : "#444"};
  }
`;

export default Card;