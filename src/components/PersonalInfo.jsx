import Heading from "./Heading";
import Text from "./Text";
import Input from "./Input";
import ButtonsBar from "./ButtonsBar";
import Container from "./Container";
import GridContainer from "./GridContainer";
import { useForm } from "../contexts/FormContext";
import { useEffect, useState } from "react";
import { personalInfoIds } from "../data/data";

function PersonalInfo() {
  const { personalInfo, error, dispatch } = useForm();
  const [sendForm, setSendForm] = useState(false);

  function handleChange(e) {
    dispatch({
      type: "personalInfo/update",
      payload: { ...personalInfo, [e.target.name]: e.target.value },
    });
  }

  function handleClick() {
    setSendForm(true);
  }

  useEffect(() => {
    const isError = Object.values(personalInfo).every(
      (value) => value.length > 0
    );
    dispatch({ type: "error/update", payload: !isError });
  }, [dispatch, personalInfo]);

  console.log(error);

  return (
    <GridContainer>
      <Container gap="4rem">
        <Container gap=".5rem">
          <Heading>Personal info</Heading>
          <Text>
            Please provide your name, email address, and phone number.
          </Text>
        </Container>
        <Container gap="2rem">
          {personalInfoIds.map((p) => {
            return (
              <Input
                key={p.id}
                id={p.id}
                label={p.label}
                placeholder={p.placeholder}
                type={p.type}
                value={personalInfo[p.id]}
                onChange={handleChange}
                isError={sendForm && !(personalInfo[p.id]?.length > 0)}
              />
            );
          })}
        </Container>
      </Container>

      <Container type="last">
        <ButtonsBar onClick={handleClick} />
      </Container>
    </GridContainer>
  );
}

export default PersonalInfo;
