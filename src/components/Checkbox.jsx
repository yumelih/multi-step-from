import styled from "styled-components";
import Text from "./Text";
import PropTypes from "prop-types";
import { useForm } from "../contexts/FormContext";

const StyledLabel = styled.label`
  border: 1px solid var(--color-blue-marine);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1.5rem;
  border-radius: 10px;
`;
const StyledInput = styled.input`
  transform: scale(1.3);
  accent-color: var(--color-blue-purplish);
`;

const StyledDiv = styled.div`
  margin-left: auto;
`;

function Checkbox({ id, label, checked, onChange }) {
  const { plan } = useForm();
  let duration = plan.yearly ? 10 : 1;

  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <div>
        <Text fontSize="1.5rem" color="var(--color-blue-marine)">
          {label?.title}
        </Text>
        <Text fontSize="1.5rem">{label?.desc}</Text>
      </div>
      <StyledDiv>
        <Text fontSize="1.5rem" color="var(--color-blue-purplish)">
          {`+$${label?.price * duration}/${plan.yearly ? "yr" : "mo"}`}
        </Text>
      </StyledDiv>
    </StyledLabel>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.object,
};

export default Checkbox;
