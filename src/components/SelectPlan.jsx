import GridContainer from "./GridContainer";
import Container from "./Container";
import Heading from "./Heading";
import Text from "./Text";
import ButtonsBar from "./ButtonsBar";
import RadioButton from "./RadioButton";
import Toggle from "./Toggle";
import { useForm } from "../contexts/FormContext";
import { useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

function SelectPlan() {
  const plans = ["arcade", "advanced", "pro"];
  const { plan, dispatch } = useForm();
  const { width } = useWindowDimensions();

  function handleChange(e) {
    dispatch({
      type: "planType/update",
      payload: { ...plan, type: e.target.checked ? e.target.id : "" },
    });
  }

  function handleCheckbox() {
    dispatch({
      type: "planDuration/update",
      payload: { ...plan, yearly: !plan.yearly },
    });
  }

  useEffect(() => {
    const isError = plan.type.length > 0;
    dispatch({ type: "error/update", payload: !isError });
  }, [dispatch, plan]);

  console.log(plan);

  return (
    <GridContainer>
      <Container gap="4rem">
        <Container gap=".5rem">
          <Heading>Select your plan</Heading>
          <Text>You have the option of monthly or yearly billing.</Text>
        </Container>
        <Container direction={width > 600 && "row"} gap="2rem">
          {plans.map((p) => {
            return (
              <RadioButton
                key={p}
                id={p}
                label={p.charAt(0).toUpperCase() + p.slice(1)}
                groupName="plan"
                value={p}
                checked={plan.type === p}
                onChange={handleChange}
              />
            );
          })}
        </Container>
        <Container direction="row" type="with-background">
          <Toggle onChange={handleCheckbox} checked={plan.yearly} />
        </Container>
      </Container>

      <Container>
        <ButtonsBar />
      </Container>
    </GridContainer>
  );
}

export default SelectPlan;
