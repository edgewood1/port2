import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Text, Title, Grid, ColContainer } from "../css/Pages_css";


class Blog extends React.Component {
  state = {
    hits: [], 
    id: ""
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    console.log(id);
    if (id === "React") {
      console.log("hhhiiiittt");
      var url = "/go";
      axios.get(url).then(function(res) {
        console.log("finished");
      });
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.setState({id: id})
    var new_id = id.toString();
    // myStr=myStr.toLowerCase();
    new_id = new_id.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, ""); //this one
    new_id = new_id.replace(/\s+/g, "-");
    var newer_id = new_id.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g, "-");
    // if (id == 'React') {
    //     skip(id)
    // }

    // 'https://public-api.wordpress.com/rest/v1/sites/code757.wordpress.com/posts/'

    var url =
      "https://public-api.wordpress.com/rest/v1.1/sites/code757.wordpress.com/posts/?tag=" +
      newer_id;
    
    axios.get(url).then(res => {
      var posts = res.data.posts;
      
      //   var posts = decodeURIComponent(posts)
      var hits = posts.map(element => {
        
        if (element.tags) {
          
          if (element.tags[id].name === id) {
            
            return element;
          }
        }
      });
      //posts found for query
      this.setState({ hits: hits }, () => {
        console.log(this.state.hits);
      });
    });
  }
  link = {
    'color': 'black',
    'text-decoration': 'none'
  }
   
  fix(elem){
    elem = elem["title"].toString().replace(/[0-9 ]/, "");
    var colon = elem.indexOf(":");
    var post1 = elem.slice(colon+1);
    return post1;
  }

  render() {
    if (this.state.hits.length > 0) {
       
    }

 
    return (
      <ColContainer>
        <Title> {this.state.id}</Title>
   
            {this.state.hits.map((elem, i) =>  
              
             
              (<Link style={this.link}
                className="col s6"
                key={i}
                to={`/one_post/${elem["ID"]}`}
              >
                {this.fix(elem)}
              </Link>
            )
             )}
            </ColContainer>
     
    );
  }
}

export default Blog;
