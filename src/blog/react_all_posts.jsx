import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { Text, Title,   ColContainer } from "../css/Pages_css";

class React_blog extends React.Component {
  state = {
    hits: []
  };

  componentDidMount() {
    var url = "https://api.github.com/repos/edgewood1/portfolio/contents/markdown";
 
    axios.get(url).then(results => {
      results = results.data;
    
      var hits = results.map(element => {
      
        return element.name;
      });
      this.setState({ hits: hits }, () => {
        console.log(this.state.hits);
      });
    });
  }
  /// end of compDidMount
 

  render() {
    return (
          <ColContainer>
        <Title> React Posts </Title>  
        
        <br />
        <ul>
          {this.state.hits.map(elem => (
            <Text>
              <Link to={`/react_post/${elem}`}>
                {elem.replace(".md", "").replace(/[0-9]+-/, "")}
              </Link>
              </Text>
          ))}
        </ul>
      </ColContainer>
    );
  }
}

export default React_blog;
