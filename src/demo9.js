import React, { Component } from 'react';


class App extends Component{
    render(){
        return(
            <div>
               <Input/>
            </div>
        )
    };
}


class Input extends Component{
    constructor(props) {
      super(props);
      this.state = {value: 'Hello!'};
      // This binding is necessary to make `this` work in the callback
      this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
      this.setState({value: event.target.value});
    };

    render() {
      var value = this.state.value;
      return (
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <p>{value}</p>
        </div>
      );
    };
  }

  export default App;