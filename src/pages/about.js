import React from "react";

import { ColContainer2, Title, ParaText } from "../css/Pages_css";

function Info() {
  return (
    <ColContainer2 style={{ marginRight: "20vw", marginLeft: "20vw" }}>
      <Title> Background </Title>

      <ParaText>
        In college, I studied literature and philosophy and spent many years
        teaching college writing and research classes at various nearby
        colleges.
      </ParaText>

      <ParaText>
        I've also spent a bit of time as an outdoor guide for teens as well as
        an operations manager at a wildcrafting & outdoor school. These days, I
        spend my time with my wife, daughter, and dog.
      </ParaText>
      <ParaText>
        In terms of coding, it's easy for me to see it as an extension of the
        various forms of writing I've explored through my life. To this end, I
        appreciate the way web development integrates my past interests yet
        allows for new forms of expression, collaboration, and community.
      </ParaText>
      <ParaText>
        To this end, I appreciate the way web development integrates my past
        interests yet allows for new forms of expression, collaboration, and
        community.
      </ParaText>
    </ColContainer2>
  );
}

export default Info;
