import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "../contexts/FormContext";

const StyledButtonsBar = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 37.5em) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 3rem;
    background-color: var(--color-white-lighter);
  }
`;

const StyledButton = styled.button`
  border: none;
  font-size: 1.6rem;
  cursor: pointer;

  ${(props) => {
    switch (props.type) {
      case "with-border":
        return css`
          border-radius: 10px;
          padding: 1rem 2.5rem;
          color: var(--color-white-lightest);
          background-color: var(--color-blue-marine);
          &:hover {
            ${(props) => {
              return (
                props.lastOne &&
                css`
                  background-color: var(--color-blue-pastel);
                `
              );
            }};
            opacity: ${(props) => (props.lastOne ? "100%" : "85%")};
          }
        `;

      default:
        return css`
          background-color: transparent;

          &:hover {
            color: var(--color-blue-marine);
          }
        `;
    }
  }};
`;

function ButtonsBar({ onClick }) {
  const { step, error, dispatch } = useForm();

  return (
    <StyledButtonsBar>
      {!(step === 0) && (
        <StyledButton onClick={() => dispatch({ type: "step/decrease" })}>
          Go Back
        </StyledButton>
      )}
      <StyledButton
        type="with-border"
        onClick={() => {
          onClick?.();
          !error && dispatch({ type: "step/increase" });
        }}
      >
        {step === 3 ? "Confirm" : "Next Step"}
      </StyledButton>
    </StyledButtonsBar>
  );
}

export default ButtonsBar;
