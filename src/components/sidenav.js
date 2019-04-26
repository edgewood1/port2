import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/home.js";
import Here from "../pages/here.js";

var Menu = styled.div`
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

var Closed = styled.div`
  display: none;
`;

var Open = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    transition: 1s;
    display: block
    width: 125px;
    height: 100vh;
    background-color: blue;
 
  }
`;
var Text = styled.div`
  padding: 1.3em;
  font-size: 125%;
  color: white;
`;

var Hr = styled.hr`
  height: 0.25vh;
  background-color: white;
`;

export default class sideNav extends React.Component {
  state = {
    open: true
  };

  handle = () => {
    const currentState = this.state.open;
    this.setState({ open: !currentState });
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
    console.log(this.state.open);
    return (
      <Router>
        <Menu onClick={() => this.handle()}>
          <Hr />
          <Hr />
          <Hr />
        </Menu>
        <div style={{ position: "fixed", top: "7vh" }}>
          {this.state.open ? (
            <Open>
              {this.titles.map(e => (
                <Link to={e[1]}>
                  <Text onClick={() => this.handle()}>{e[0]}</Text>
                </Link>
              ))}
            </Open>
          ) : (
            <Closed />
          )}
        </div>

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
