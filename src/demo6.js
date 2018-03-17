import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component{
    render(){
        return(
            <div>
                 <DefaultMessage />
            </div>
        );
    };
}

class DefaultMessage extends Component{
    render() {
    return (<h1>Hello {this.props.name}</h1>);
    }
  }

DefaultMessage.propTypes = {
    name: PropTypes.string
};
  
DefaultMessage.defaultProps ={
      name : 'World'
 }
export default App;