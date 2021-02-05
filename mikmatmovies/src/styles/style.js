import styled from "styled-components/macro";

export const TextContainer = styled.div`
  color: #ffffff;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 200px;
  margin: 0;
  padding: 0;
  @media (max-width: 480px) {
    background: yellow;
    margin: 0;
    padding: 0;
  }
`;
