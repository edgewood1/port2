import React from "react";

import { ColContainer2, Title, ParaText } from "../css/Pages_css";

function Info() {
  return (
    <ColContainer2 style={{ marginRight: "20vw", marginLeft: "20vw" }}>
      <Title> Background </Title>

      <ParaText>
        In college, I studied literature and philosophy before teaching writing and research classes at various nearby
        colleges.
      </ParaText>

      <ParaText>
        I've also spent a bit of time as an outdoor guide for teens as well as
        an operations manager at a wildcrafting & outdoor school. These days, I
        spend my time with my wife, daughter, and dog.
      </ParaText>
      <ParaText>
        Coding could be seen as a kind of writing, with its own syntax and rhetoric, its own recursive process, its own styles of delivery.
        I also appreciate the way web development integrates my past interests yet
        allows for new forms of expression, collaboration, and community.
      </ParaText>
      <ParaText>
        I tend to focus on javaScript, revisting React and Node/Express.  I also keeping coming back to the query languages of MySQL and MongoDB.
      </ParaText>
    </ColContainer2>
  );
}

export default Info;
