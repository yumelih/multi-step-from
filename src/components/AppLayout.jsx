import styled from "styled-components";
import Sidebar from "./Sidebar";
import MainBar from "./MainBar";

const StyledAppLayout = styled.div`
  width: 45%;
  height: 65%;
  background-color: var(--color-white-lightest);
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 1rem;

  @media screen and (max-width: 78em) {
    width: 70%;
  }

  @media screen and (max-width: 37.5em) {
    width: 100%;
    height: 100%;
    grid-template-columns: auto;
    grid-template-rows: 20% 1fr;
    background-color: var(--color-gray-lighter);
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <MainBar />
    </StyledAppLayout>
  );
}

export default AppLayout;
