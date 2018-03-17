import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <div>
                <Parent>
                    <span>hello</span>
                    <span>world</span>
                </Parent>
            </div>
        )
    };
}

class Parent extends Component{
    render(){
        return(
            <ol>
                {React.Children.map(this.props.children,function(child)
                    {return <li>{child}</li>;})}
            </ol>
        )
    };
}


export default App;