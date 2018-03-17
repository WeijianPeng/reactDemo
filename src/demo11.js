import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <div>
               <UserGist source="https://api.github.com/users/octocat/gists"/>
            </div>
        )
    };
}
  
export default App;

class UserGist extends Component{
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        lastGistUrl: ''
      };
    };

    componentDidMount() {
      fetch(this.props.source)
      .then(res => res.json())
      .then(
        (result) => {
          var lastGist = result[0];
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.owner.html_url
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            username: "error",
            error
          });
        }
      )
    };
  
    render() {
      return (
        <div>
          {this.state.username}'s last gist is  
           <a href={this.state.lastGistUrl}>here</a>.
        </div>
      );
    }
  }
  
