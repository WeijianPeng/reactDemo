import React, { Component } from 'react';


class App extends Component{
    render(){
        return(
            <div>
                 <HelloMessage name="pengwei" />,
            </div>
        )
    };
}

class HelloMessage extends Component{
    render() {
      return <h1>Hello {this.props.name}</h1>;
    }
  }


export default App;