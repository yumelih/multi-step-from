import styled from "styled-components";
import PropTypes from "prop-types";
import FlexContainer from "./FlexContainer";

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray-light);
  border-radius: 10px;
  margin-top: 0.5rem;
  color: var(--color-blue-marine);

  &:focus {
    outline: 1px solid var(--color-blue-purplish);
  }
`;
const StyledLabel = styled.label`
  color: var(--color-blue-marine);
  font-size: 1.5rem;
`;

const Error = styled.span`
  color: var(--color-red);
  font-size: 1.4rem;
`;

function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isError,
}) {
  return (
    <div>
      <FlexContainer>
        <StyledLabel id={id} htmlFor={id}>
          {label}
        </StyledLabel>
        {isError && <Error>This field is required</Error>}
      </FlexContainer>
      <StyledInput
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        defaultValue={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
