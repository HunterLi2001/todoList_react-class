import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  //状态在哪里，操作该状态的方法在哪里
  state = {
    todos: [],
  };
  addTodo = (todoObj) => {
    //接受一个对象
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done };
    });
    this.setState({ todos: newTodos });
  };
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
