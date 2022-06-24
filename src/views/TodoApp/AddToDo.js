import React, { Component } from "react";

export default class AddToDo extends Component {
  state = {
    title: "",
  };
  handleChangeInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleAddToDo = (e) => {
    if (!this.state.title) {
      alert("no empty!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewToDo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="todo-add">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleChangeInput(e)}
        />
        <button onClick={(e) => this.handleAddToDo(e)}>Add</button>
      </div>
    );
  }
}
