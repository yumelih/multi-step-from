import styled from "styled-components";
import Text from "./Text";
import PropTypes from "prop-types";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;
const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + div {
    background-color: var(--color-blue-marine);

    &::before {
      left: 2.2rem;
    }
  }
`;

const Switch = styled.div`
  position: relative;
  width: 4rem;
  height: 2rem;
  background-color: var(--color-gray-light);
  border-radius: 30px;
  padding: 0.4rem;
  transition: all 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3.5rem;
    top: 50%;
    left: 0.3rem;
    background-color: var(--color-white-lightest);
    transform: translate(0, -50%);
    transition: all 0.3s;
  }
`;

function Toggle({ onChange, checked }) {
  return (
    <Label>
      <Text fontSize="1.4rem">Monthly</Text>
      <Input type="checkbox" onChange={(e) => onChange(e)} checked={checked} />
      <Switch />
      <Text fontSize="1.4rem">Yearly</Text>
    </Label>
  );
}

Toggle.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Toggle;
