import React, { Component } from 'react';


class App extends Component{
   
    render(){
        return(
            <div>
                 <TrueDom />
            </div>
        );
    };
}

class TrueDom extends Component{
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.refs.myTextInput.focus();
    };
    
    render() {
        return(
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    };
  }


export default App;