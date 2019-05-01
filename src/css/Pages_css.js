import styled from "styled-components";
// #root highest level
// this is next
export var Body1 = styled.div`
  background: -webkit-linear-gradient(to right, #e1f5c4, #ede574);
  background: linear-gradient(
    to right,
    #e1f5c4,
    #ede574
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

// pre {
//   background-color: lightgray;
//   word-wrap: "break-word";
//   white-space: "pre-line";
// }

// blog , app inner
export const ColContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10vh;
  align-items: center;
`;

//blog inner
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

//about
export const ColContainer2 = styled(ColContainer)`
  padding-left,padding-right: 20vw;
  margin-right: 20vw;
  margin-left: 20vw;
`;

//home, contact
export const ColContainer3 = styled(ColContainer)`
  align-items: center;
`;
//app (1 inside),
//resume
export const ColContainer4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 7vh;
`;

// apps inner
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
    // align-items: center;
  }
`;
export const Flex1 = styled.div`
  padding-left: 30vw;
  padding-right: 5vw;
  @media (max-width: 700px) {
    text-justify: center;
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const Flex2 = styled.div`
  padding-left: 5vw;
  padding-right: 20vw;
  @media (max-width: 700px) {
    // text-justify: center;
    padding-left: 5vw;
    padding-right: 2vw;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-family: Garamond;
  font-size: 2em;
  text-align: center;
`;

export const FourEmTitle = styled(Title)`
  font-size: 3em;
`;

export const Text = styled.div`
  font-family: Garamond;
  font-size: 1.5em;
  line-height: 1.5em;
`;

export const ParaText = styled(Text)`
  text-indent: 2em;
`;

export const BoldText = styled(Text)`
  font-weight: bold;
`;

export const SubText = styled(Text)`
  margin: 0 3vw;
`;

export const Button = styled.button`
  color: white;
  padding: 1%;
  border-radius: 35%;
  background: linear-gradient(to right, #94716b, #b79891);
  width: 13vh;
  font-size: 1.25em;
`;

export const Space = styled.div`
  height: 6vh;
`;

export var Hr = styled.hr`
  height: 0.25vh;
  background-color: black;
`;
