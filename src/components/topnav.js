import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/home.js";
import Here from "../pages/here.js";
var Text = styled.div`
  transition: 1s;
  margin-top: 0.9em;
  font-size: 1.25em;
  color: white;
  @media screen and (max-width: 650px) {
    display: none;
    transition: 1s;
  }
`;

var Wrap = styled.div`
  width: 100vw;
  height: 7vh;
  background: blue;
  transition: 1s;
  display: flex;
  justify-content: space-evenly;
}`;

class TopNav extends React.Component {
  handle = () => {
    console.log("hanlde");
  };
  titles = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Blogs", "/blogs"],
    ["Apps", "/apps"],
    ["Resume", "/resume"],
    ["Contact", "/contact"]
  ];

  render() {
    return (
      <Router>
        <Wrap>
          {this.titles.map(e => (
            <Link to={e[1]}>
              <Text>{e[0]}</Text>
            </Link>
          ))}
        </Wrap>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={Here} />
        <Route path="/blogs" component={Home} />
        <Route path="/apps" component={Here} />
        <Route path="/resume" component={Home} />
        <Route path="/contact" component={Here} />
      </Router>
    );
  }
}
export default TopNav;
