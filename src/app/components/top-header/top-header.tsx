import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  background-color: #222;
  border-bottom: 1px solid #444;
  
  h3 {
    margin: 0;
  }
`;

const BrandLink = styled(Link)`
  text-decoration: none;
`;

const TopHeader = () => {
  return (
    <StyledHeader>
      <BrandLink to="/"><h3>Forum CMS</h3></BrandLink>
    </StyledHeader>
  );
};

export default TopHeader;