import styled from "styled-components";

const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(min-content, 1fr);
  align-content: space-between;
`;

export default GridContainer;
