import React from "react";
import details from "../media/resume_details.js";

import {
  Title,
  BoldText,
  Text,
  ColContainer4,
  Space,
  SubText
} from "../css/Pages_css";

function Apps() {
  const [intro, ed, work, volunteer] = details;

  return (
    <ColContainer4 style={{ marginLeft: "25vw", marginRight: "25vw" }}>
      <Space />
      <Title> Mel DeJesus </Title>
      <Title> 919-220-8424 </Title>
      <hr />
      <Space />

      <Text>
        <span style={{ fontWeight: "bold" }}>OBJECTIVE </span> {intro.object}
      </Text>
      <hr />
      <Space />
      <BoldText>SKILLS:</BoldText>
      <Text>{intro.languages.join(", ")}</Text>
      <Text>{intro.front_skills.join(", ")}</Text>
      <Text>{intro.back_skills.join(", ")}</Text>
      <Text>{intro.databases.join(", ")}</Text>
      <Text>{intro.personal.join(", ")}</Text>
      <hr />
      <Space />
      <BoldText> EDUCATION: </BoldText>

      {ed.map(e => (
        <div>
          <Text>
            {e.pgm}, {e.time}, {e.school}
          </Text>
          <SubText> {e.desc} </SubText>
          <Space />
        </div>
      ))}
      <hr />
      <BoldText>WORK: </BoldText>
      {work.map(e => (
        <div>
          <Text>
            {e.pgm} -- {e.where}, {e.when}
          </Text>
          {e.desc.map(f => (
            <SubText>
              <li>{f}</li>
            </SubText>
          ))}
          <Space />
        </div>
      ))}
      <hr />
      <BoldText> VOLUNTEER:</BoldText>
      <Space />
      {volunteer.map(e => (
        <div>
          <Text>
            {e.pgm}: {e.where}, {e.when}{" "}
          </Text>
          <SubText>{e.desc}</SubText>
          <Space />
        </div>
      ))}
    </ColContainer4>
  );
}

export default Apps;
