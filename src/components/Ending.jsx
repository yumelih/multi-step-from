import styled from "styled-components";

import Heading from "./Heading";

import Text from "./Text";

const Img = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`;

const CenteredContainer = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function Ending() {
  return (
    <CenteredContainer>
      <Img src="../../public/images/icon-thank-you.svg" />
      <Heading>Thank You!</Heading>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us
        support@loremgaing.com
      </Text>
    </CenteredContainer>
  );
}

export default Ending;
