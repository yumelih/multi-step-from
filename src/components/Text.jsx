import styled, { css } from "styled-components";

const Text = styled.p`
  ${(props) => {
    return css`
      font-size: ${props.fontSize || "inherit"};
      font-weight: ${props.fontWeight || "inherit"};
      color: ${props.color || "var(--color-gray-lighther)"};
    `;
  }}
`;

export default Text;
