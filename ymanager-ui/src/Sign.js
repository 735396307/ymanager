import React, {Component} from 'react';

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            name1:props.name1,
            name2:props.name2
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
        return (
        <div className='wrapper'>
            <button className='like-btn' onClick = {this.handleClick}>
                <span className='like-text' style={{fontSize:'20px'}} >
                    {this.state.isToggleOn ? this.state.name1 : this.state.name2}
                </span>
                <span>👍</span>
            </button>
      </div>);
    }
}
export default Sign;