import React from "react";
import appDetails from "../media/app_details";

import {
  Title,
  Space,
  Hr,
  Text,
  RowContainer as Container,
  ColContainer4,
  Flex1,
  Flex2,
  BoldText
} from "../css/Pages_css.js";

function Apps() {
  return (
    <ColContainer4>
      <Space />
      <Title> Applications</Title>
      <Hr />
      <Space />
      {appDetails.map((e, i) => (
        <Container key={i}>
          <Flex1>
            <BoldText> {e.title} </BoldText>

            <BoldText>{e.tech}</BoldText>

            <Text> {e.desc}</Text>
          </Flex1>
          <Space />
          <Flex2>
            <img src={e.image} alt={e.title} height="300" width="300" />

            <a href={e.link} target="_blank">
              <Text>View Project Here</Text>
            </a>

            <Space />
            <Hr />
            <Space />
          </Flex2>
          <Hr />
        </Container>
      ))}
    </ColContainer4>
  );
}

export default Apps;
