import { useForm } from "../contexts/FormContext";
import { addOnIds } from "../data/data";
import ButtonsBar from "./ButtonsBar";
import Checkbox from "./Checkbox";
import Container from "./Container";
import GridContainer from "./GridContainer";
import Heading from "./Heading";
import Text from "./Text";

function PickAddOns() {
  const { addOns, dispatch } = useForm();

  function handleChange(e) {
    dispatch({
      type: "addOn/update",
      payload: { ...addOns, [e.target.name]: !addOns[e.target.name] },
    });
  }

  console.log(addOns);

  return (
    <GridContainer>
      <Container gap="2rem">
        <Container gap="0.5rem">
          <Heading>Pick add-ons</Heading>
          <Text>Add-ons help enhnace your gaming experience.</Text>
        </Container>
        <Container gap="2rem">
          {addOnIds.map((addOn) => {
            return (
              <Checkbox
                key={addOn.type}
                id={addOn.type}
                label={addOn.label}
                checked={addOns[addOn.type]}
                onChange={handleChange}
              />
            );
          })}
        </Container>
      </Container>
      <Container>
        <ButtonsBar />
      </Container>
    </GridContainer>
  );
}

export default PickAddOns;
