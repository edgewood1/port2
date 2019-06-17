import React from "react";

import { ColContainer2, Title, ParaText } from "../css/Pages_css";

function Info() {
  return (
    <ColContainer2 style={{ marginRight: "20vw", marginLeft: "20vw" }}>
      <Title> Background </Title>

      <ParaText>
      I tend to focus on javaScript with regular excursions into React, Node, Express, and the NoSQL and SQL query languages.
      </ParaText>

      <ParaText>
        In my previous life, I studied literature and philosophy and taught writing and research and outdoor classes at various nearby
        colleges and centers.
      </ParaText>
      <ParaText>
        Coding could be seen as a kind of writing, with its own syntax and rhetoric, its own recursive process, its own modes of self-expression, collaboration, and community.
      </ParaText>
      <ParaText>
        These days, I spend my time with my wife, daughter, and dog.
      </ParaText>
    </ColContainer2>
  );
}

export default Info;
