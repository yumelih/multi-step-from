import styled from "styled-components";

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import PickAddOns from "./PickAddOns";
import { useForm } from "../contexts/FormContext";
import Ending from "./Ending";

const StyledMainBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 6rem;

  @media screen and (max-width: 37.5em) {
    margin: -5rem 3rem 10rem;
    padding: 3rem 6rem;
    background-color: var(--color-white-lighter);
    border-radius: 2rem;
  }
`;

function MainBar() {
  const { step, confirm } = useForm();
  console.log(confirm);

  return (
    <StyledMainBar>
      {step === 0 && <PersonalInfo />}
      {step === 1 && <SelectPlan />}
      {step === 2 && <PickAddOns />}
      {step === 3 && !confirm && <Summary />}
      {confirm && step === 3 && <Ending />}
    </StyledMainBar>
  );
}

export default MainBar;
