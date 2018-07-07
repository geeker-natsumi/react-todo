import React, { Component } from 'react';

export default class Reset extends Component {
  constructor(props){
    super(props)
    }


  render(){

    return(
      <div>
        <input className="button--add" type="button" value="リセット" onClick={this.props.onClick}/>
      </div>
    );
  }
  // this.props.onClick :親で呼んでるイベントをそのまま実行
}
