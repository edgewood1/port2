import styled from "styled-components";

export var Text1 = styled.div`
  transition: 1s;
  margin-top: 0.9em;
  font-size: 1.25em;
  color: white;
  @media screen and (max-width: 650px) {
    display: none;
    transition: 1s;
  }
`;

export var Wrap1 = styled.div`
  width: 100vw;
  height: 7vh;
  background: linear-gradient(
    to right,
    #94716b,
    #b79891
  );
  transition: 1s;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0px;
}`;
export var Menu = styled.div`
  display: none;
  @media only screen and (max-width: 650px) {
    display: block;
    width: 2.75em;
    color: white;
    position: fixed;
    top: 0.3em;
    left: 1.9em;
    z-index: 2;
  }
`;

export var Closed = styled.div`
  display: none;
`;

export var Open = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    transition: 1s;
    display: block
    width: 125px;
    height: 60vh;
    background: linear-gradient(
      to right,
      #94716b,
      #b79891
    );
 
  }
`;
export var Text = styled.div`
  padding: 1.3em;
  font-size: 125%;
  color: white;
`;

export var Hr = styled.hr`
  height: 0.25vh;
  background-color: white;
`;
