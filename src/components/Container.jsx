import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;

  gap: ${(p) => p.gap};
  ${(props) =>
    props.type === "last" &&
    css`
      align-self: end;
    `}

  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

  ${(props) => {
    return (
      props.direction === "row" &&
      css`
        justify-content: center;
      `
    );
  }}

  ${(props) =>
    props.type === "with-background" &&
    css`
      background-color: var(--color-white-light);
      padding: 1.5rem 0;
    `}
`;

export default Container;
