import styled, { css } from "styled-components";
import Container from "./Container";
import GridContainer from "./GridContainer";
import Heading from "./Heading";
import Text from "./Text";
import ButtonsBar from "./ButtonsBar";
import { useForm } from "../contexts/FormContext";
import { addOnIds, prices } from "../data/data";
import FlexContainer from "./FlexContainer";

const Receipt = styled.div`
  background-color: var(--color-white-light);
  padding: 2rem;
  font-size: 1.5rem;
`;

const Link = styled.p`
  cursor: pointer;
  color: var(--color-blue-purplish);
  text-decoration: underline;

  &:hover {
    font-weight: 600;
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-gray-lighter);
  margin: 2rem 0;
`;

function Summary() {
  const { plan, addOns, dispatch } = useForm();

  function handleStepUpdate() {
    dispatch({ type: "step/update", payload: 1 });
  }

  function findTotal() {
    const yearly = plan?.yearly ? 10 : 1;
    const planCost = +prices.plans[plan?.type] * yearly;
    const filteredAddOns = Object.entries(addOns).map(([key, value]) => {
      return value ? key : null;
    });

    const totalAddCost =
      filteredAddOns.reduce(
        (acc, cur) => acc + Number(prices.addOns[cur] ? prices.addOns[cur] : 0),
        0
      ) * yearly;

    console.log;

    return planCost + totalAddCost;
  }

  return (
    <GridContainer>
      <Container gap="2rem">
        <Container gap=".5rem">
          <Heading>Finishing up</Heading>
          <Text>Double-check everything looks OK before confirming.</Text>
        </Container>
        <Container gap="2rem">
          <Receipt>
            <FlexContainer>
              <FlexContainer direction="column">
                <Text color="var(--color-blue-marine)" fontWeight="600">
                  {" "}
                  {plan?.type.charAt(0).toUpperCase() + plan?.type.slice(1)}(
                  {plan?.yearly ? "Yearly" : "Monthly"})
                </Text>
                <Link onClick={handleStepUpdate}>Change</Link>
              </FlexContainer>
              <Text color="var(--color-blue-marine)" fontWeight="600">
                ${Number(prices.plans[plan?.type] * (plan?.yearly ? 10 : 1))}/
                {plan?.yearly ? "yr" : "mo"}
              </Text>
            </FlexContainer>
            <Divider />
            <Container gap="1rem">
              {Object.entries(addOns).map(([key, value]) => {
                return (
                  value && (
                    <FlexContainer key={key}>
                      <Text>
                        {addOnIds.find((a) => a.type === key).label.title}
                      </Text>
                      <Text>
                        ${Number(prices.addOns[key]) * (plan?.yearly ? 10 : 1)}/
                        {plan?.yearly ? "yr" : "mo"}
                      </Text>
                    </FlexContainer>
                  )
                );
              })}
              {Object.values(addOns).every((a) => !a) && (
                <Text>No add ons</Text>
              )}
            </Container>
          </Receipt>
          <Container>
            <FlexContainer padding="2rem">
              <Text>Total (per month)</Text>
              <Text
                color="var(--color-blue-purplish)"
                fontSize="2rem"
                fontWeight="600"
              >
                +{findTotal()}/mo
              </Text>
            </FlexContainer>
          </Container>
        </Container>
      </Container>
      <Container>
        <ButtonsBar lastOne={true} />
      </Container>
    </GridContainer>
  );
}

export default Summary;
