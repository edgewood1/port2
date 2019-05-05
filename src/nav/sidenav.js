import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/home.js";
import Apps from "../pages/apps.js";
import About from "../pages/about.js";
import Blog from "../pages/blog.jsx";
import All_Posts from "../blog/all_posts.jsx";
import React_Posts from "../blog/react_all_posts.jsx";
import React_Post from '../blog/react_post.jsx';
import Contact from "../pages/contact.jsx";
import Resume from "../pages/resume2.jsx";
import One_Post from '../blog/one_post.jsx';

import { Open, Text, Text1, Wrap1, Menu, Closed, Hr } from "../css/nav_css.js";

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
        <Wrap1>
          {this.titles.map((e, i) => (
            <Link key = {i} to={e[1]}>
              <Text1>{e[0]}</Text1>
            </Link>
          ))}
        </Wrap1>
        <Menu onClick={() => this.handle()}>
          <Hr />
          <Hr />
          <Hr />
        </Menu>
        <div style={{ position: "fixed", top: "7vh" }}>
          {this.state.open ? (
            <Open>
              {this.titles.map((e, i) => (
                <Link key={i} to={e[1]}>
                  <Text onClick={() => this.handle()}>{e[0]}</Text>
                </Link>
              ))}
            </Open>
          ) : (
            <Closed />
          )}
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blog} />
        <Route path="/apps" component={Apps} />
        <Route path="/one_post/:id" component={One_Post} />
        <Route path="/all_posts/:id" component={All_Posts} />
        <Route path="/react" component={React_Posts} />
        <Route path="/react_post/:id" component={React_Post} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}
