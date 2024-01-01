import styled, { css } from "styled-components";
import { useForm } from "../contexts/FormContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

const StyledSidebar = styled.div`
  background-image: url("/public/images/bg-sidebar-desktop.svg");
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4rem 3rem;

  @media screen and (max-width: 37.5em) {
    background-position: 20% 80%;
  }
`;

const Steps = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media screen and (max-width: 37.5em) {
    height: 100%;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Step = styled.li`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  grid-template-rows: repeat(2, min-content);
  justify-items: start;
  align-items: center;
  column-gap: 1.3rem;
  text-transform: uppercase;

  @media screen and (max-width: 37.5em) {
    column-gap: 0.2rem;
  }
`;

const StepNumber = styled.span`
  display: block;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  padding: 0.2rem 1rem;
  border-radius: 100px;
  font-size: 1.8rem;
  color: var(--color-white-lightest);
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "activeStep" ? "var(--color-blue-light)" : "transparent"};
  border: ${(props) =>
    props.type === "activeStep"
      ? "none"
      : "1px solid var(--color-white-light)"};

  @media screen and (max-width: 37.5em) {
    font-size: 2rem;
    padding: 0.5rem 1.5rem;
  }
`;

const StepText = styled.p`
  grid-column: 2;
  line-height: 1.6rem;

  ${(props) => {
    switch (props.type) {
      case "small":
        return css`
          font-size: 1.2rem;
          color: var(--color-gray-lighter);
        `;
      default:
        return css`
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--color-white-lighter);
          letter-spacing: 0.2rem;
        `;
    }
  }}
`;

function Sidebar() {
  const { step, error, dispatch } = useForm();
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  const { height, width } = useWindowDimensions();

  function changeStep(s) {
    if (error) return;
    dispatch({ type: "step/update", payload: s });
  }

  return (
    <StyledSidebar>
      <Steps>
        {steps.map((currentStep, index) => {
          return (
            <Step key={currentStep} onClick={() => changeStep(index)}>
              <StepNumber type={index === step ? "activeStep" : ""}>
                {index + 1}
              </StepNumber>
              {width > 600 && (
                <>
                  <StepText type="small">Step {index + 1}</StepText>
                  <StepText>{currentStep}</StepText>
                </>
              )}
            </Step>
          );
        })}
      </Steps>
    </StyledSidebar>
  );
}

export default Sidebar;
