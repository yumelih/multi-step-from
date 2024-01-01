import styled from "styled-components";
import AppLayout from "./components/AppLayout";

import GlobalStyles from "./styles/GlobalStyles";
import { FormProvider } from "./contexts/FormContext";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <FormProvider>
        <GlobalStyles />
        <MainContainer>
          <AppLayout />
        </MainContainer>
      </FormProvider>
    </>
  );
}

export default App;
