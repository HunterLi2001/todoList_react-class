import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  handleDelete = (id) => {
    if (window.confirm("你想删除这个事项吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
          onClick={() => {
            this.handleDelete(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
