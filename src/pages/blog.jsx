import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Text, Text2, Title, Grid, ColContainer } from "../css/Pages_css";

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    var data = [];
    var col1 = [];
    var col2 = [];
    var url =
      "https://public-api.wordpress.com/rest/v1/sites/code757.wordpress.com/tags/";
    axios.get(url).then(res => {
      const posts = res.data.tags;
      var posts2 = posts.map(el => {
        if (el.post_count) return el.name;
      });

      posts2.forEach(el => {
        if (el) {
          data.push(el);
        }
      });

      data.forEach((el, i) => {
        i % 2 === 0 ? col1.push(el) : col2.push(el);
      });
      // this.setState({ posts: data });

      //  this.setState({posts: [col1, col2]})
      // this.setState({col1: col1, col2: col2})
      this.setState({ posts: data });

      // this.state.posts.forEach((e, i)=>{console.log(e[i])})
    });
  }
  style = {
    'padding-top': '20vh 0'
  }
  render() {
    var col1 = [];

    return (
      <ColContainer style={this.style}>
        <Title> Blog Categories </Title>
        <br />
        <Grid>
          {this.state.posts.map(el => (
            <Link
              style={{
                padding: "7%",
                textDecoration: "none",

                margin: "5px"
              }}
              className="col s6"
              key={el}
              to={`/all_posts/${el}`}
            >
              <Text2>{el}</Text2>
            </Link>
          ))}
          <Link
            style={{
              padding: "7%",
              textDecoration: "none",

              margin: "5px"
            }}
            className="col s6"
            key="React"
            to={`/react`}
          >
            <Text2>React</Text2>
          </Link>
        </Grid>
      </ColContainer>
    );
  }
}

export default Blog;
