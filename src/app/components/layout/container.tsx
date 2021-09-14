import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: ${({fitContent}) => fitContent ? "fit-content" : "initial"};

  @media (max-width: 575px) {
    max-width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  max-width: ${({maxWidth}) => maxWidth ? maxWidth : "auto"} !important;
`;

export default Container;