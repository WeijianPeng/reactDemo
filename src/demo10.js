import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <div>
               <ComponentLifestyle name = "pengwei"/>
            </div>
        )
    };
}
  
  
class ComponentLifestyle extends Component{
    constructor(props) {
        super(props);
        this.state = {opacity: 1.0};
    };

    componentWillMount() {
        this.timer = setInterval(function () {
        var opacity = this.state.opacity;
        var flag = this.state.flag;

        if(opacity >= 1||opacity<=0)
        {flag = !flag;}
        
        if (flag){
            opacity -= 0.02;
        }
        else{
            opacity += 0.02;
        }
        
        this.setState({
            opacity: opacity,
            flag: flag
        });
        }.bind(this), 100);
    };

    render() {
        return (
        <div style={{opacity: this.state.opacity}} flag = {true}>
            Hello {this.props.name}
        </div>
        );
    };
}

export default App;