import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props)

    this.state = {
      textValue: ''
    };

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
      this.setState({textValue: event.target.value});
  }
  handleClick(){
    this.props.onClick(this.state.textValue)
    this.state.textValue = ""
  }

  render(){

    return(
      <div>
        <input type="text" value={this.state.textValue}
         onChange={this.handleChange}/>
        <input className="button--add" type="button" value="追加" onClick={this.handleClick} />
      </div>
    );
  }
}
