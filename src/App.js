// フロント : import from
// サーバーサイド : require
// Reactコンポーネントはdivで囲まないとエラーになる
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';
import Input from './Input'
import Reset from './Reset'

class App extends Component {
  constructor(props){
    super(props);
    const todoStorage = localStorage.getItem('todo');
    const todoList = todoStorage ? JSON.parse(todoStorage)
                     : [];

    this.state = {
      todo: todoList
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  syncStorage(){
    const json = JSON.stringify(this.state.todo);
    localStorage.setItem('todo',json);
  }
  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({title: value});
    // 保存
    this.setState({todo : this.state.todo});
    this.syncStorage();
  }

 resetTodo(){
   this.state.todo = [];
   // 保存 setState stateの状態を変更してもう一回レンダー
   this.setState({
     todo : this.state.todo
   });
   this.syncStorage();
  }

  // 削除機能
  deleteTodo(index) {
    // 削除  i番目から1個を削除
    this.state.todo.splice(index, 1);
    // 保存 setState stateの状態を変更してもう一回レンダー
    this.setState({
      todo : this.state.todo
    });
    this.syncStorage();
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <ul>
          <List todo={this.state.todo} onClick={this.deleteTodo}/>
        </ul>
        <Input onClick={this.addTodo} />
        <Reset onClick={this.resetTodo} />
      </div>
    );
  }
}

export default App;
