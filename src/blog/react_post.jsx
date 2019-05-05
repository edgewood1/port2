import React from "react";

import axios from "axios";
import { Text, Title,  } from "../css/Pages_css";

import { Base64 } from "js-base64";
var showdown = require("showdown");
var converter = new showdown.Converter({ metadata: true });

class Post extends React.Component {
  state = {
    content: "",
    title: ""
  };

  createMarkup(input) {
    return { __html: input };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    var url =
      "https://api.github.com/repos/edgewood1/portfolio/contents/markdown/" +
      id;

    axios.get(url).then(res => {
      const content = Base64.decode(res.data.content);
      var title = res.data.name;
      title = title.replace(".md", "").replace("-", " - ");
      console.log(title);
      this.setState({ content: content, title: title });
    });
  }

 

  render() {
    var render = converter.makeHtml(this.state.content);
    // var meta = converter.getMetadata();
    return (
      <div>
        <Title style={{paddingTop: '10vh'}} >{this.state.title}</Title>
        <Text style={{margin: '0 20vw'}}
          
          dangerouslySetInnerHTML={this.createMarkup(render)}
        />
      </div>
    );
  }
}

export default Post;
