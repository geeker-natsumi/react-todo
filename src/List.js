import React, { Component } from 'react';

export default class List extends Component {
  constructor(props){
    super(props)
  }

  // map 配列を一個づつ繰り返して変換
  // key 複数の要素を特定できるように入れましょう

  //foreach 中身は関係ないとき
  //map 中身使いたいとき

 // アローファンクション 使っている場所をthisに勝手に参照してくれる
 // () = >
 // 従来の function() bindしないとwindowとかを参照してくる

  render(){
    const list = this.props.todo.map( (todo, index) => {
     return <li key={index} onClick={()=> this.props.onClick(index)}> <input type="button" value="☓" /> {todo.title}
     </li>
   });

    return(
      <ul>{list}</ul>
    );
  }
}
