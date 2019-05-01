import React from "react";
import { Title, ColContainer3, Button as Text } from "../css/Pages_css";

function Contact() {
  const info = {
    github: "https://github.com/edgewood1",
    linkedin: "https://www.linkedin.com/in/meldejesus/",
    wordpress: "https://code757.wordpress.com/",
    email: "mailto:meldejesus22@gmail.com",
    text: "919-220-8424",
    references: ""
  };
  return (
    <ColContainer3>
      <Title> Contacts</Title>
      <hr />
      <br />
      <Box info={info.linkedin} name="linkedin" targ="_blank" />
      <Box info={info.github} name="github" targ="_blank" />
      <Box info={info.wordpress} name="wordpress" targ="_blank" />
      <Box info={info.email} name="email" targ="_top" />
      <Other info={info.text} name="phone/text" />
    </ColContainer3>
  );
}

function Box(props) {
  return (
    <div>
      <Text>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href={props.info}
          rel="noopener noreferrer"
          target={props.targ}
        >
          {props.name}
        </a>
      </Text>
      <br />
      <br />
    </div>
  );
}
function Other(props) {
  return (
    <div>
      <Text>
        {props.name}
        <br />
        <span>{props.text}</span>
      </Text>
      <br />
      <br />
    </div>
  );
}
export default Contact;
