import React from 'react';
import {withRouter} from 'react-router-dom';
class Demo extends React.Component{
  handleClick(event){
    this.props.history.push("/register");
  }
  render(){
    return(
      <div>
         <button onclick={this.handleClick}>click me!</button>
     </div>
    );
  }
}
export default withRouter(Demo);