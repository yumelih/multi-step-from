import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./Container";
import Text from "./Text";
import { prices } from "../data/data";
import { useForm } from "../contexts/FormContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

const StyledInputRadio = styled.input`
  display: none;

  &:checked + label {
    border-color: var(--color-blue-marine);
  }
`;

const StyledLabelRadio = styled.label`
  width: 33%;
  height: 16rem;
  padding: 1.5rem;
  border: 1px solid var(--color-gray-lighter);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    font-size: 2.1rem;
  }

  &:hover {
    border-color: var(--color-blue-marine);
  }
`;

const LabelImg = styled.img`
  width: 4rem;

  @media only screen and (max-width: 37.5em) {
    width: 6rem;
  }
`;

function RadioButton({ id, label, groupName, onChange, checked, value }) {
  const { plan } = useForm();
  const { width } = useWindowDimensions();

  return (
    <>
      <StyledInputRadio
        type="radio"
        id={id}
        name={groupName}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <StyledLabelRadio htmlFor={id}>
        <LabelImg
          src={
            (id === "arcade" && "/public/images/icon-arcade.svg") ||
            (id === "advanced" && "/public/images/icon-advanced.svg") ||
            (id === "pro" && "/public/images/icon-pro.svg")
          }
        />
        <Container gap="0.3rem">
          <Text
            fontSize={width > 600 && "1.5rem"}
            color="var(--color-blue-marine)"
          >
            {label}
          </Text>
          <Text fontSize={width > 600 && "1.4rem"}>${prices.plans[id]}/mo</Text>
          {plan.yearly && (
            <Text
              fontSize={width > 600 && "1.2rem"}
              color="var(--color-blue-marine)"
            >
              2 months free
            </Text>
          )}
        </Container>
      </StyledLabelRadio>
    </>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  groupName: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

export default RadioButton;
