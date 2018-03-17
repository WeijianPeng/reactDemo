import React, { Component } from 'react';


class App extends Component{
    render(){
        return(
            <div>
               <LikeButton/>
            </div>
        )
    };
}

class LikeButton extends Component{
    constructor(props) {
     super(props);
     this.state = {liked: false};
     // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);
   }  
   
     handleClick(event) {
       this.setState({liked: !this.state.liked});
     };
     render() {
       var text = this.state.liked ? 'like' : 'don\'t liked';
       return (
         <p onClick={this.handleClick}>
           You {text} this. Click to toggle.
         </p>
       );
     };
   }

   
export default App;