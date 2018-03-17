import React, { Component } from 'react';

var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
  ];

class App extends Component{
    render(){
        return(
            <div>
                <div>{arr}</div>
            </div>
        )
    };
}

export default App;