import styled, { css } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  ${(props) => {
    return css`
      flex-direction: ${props.direction || "row"};
      justify-content: space-between;
      align-items: ${props.direction ? "flex-start" : "center"};
      padding: ${`0 ${props.padding}` || "none"};
    `;
  }}
`;

export default FlexContainer;
