import React, { Component } from "react";
import AddToDo from "./AddToDo";

export default class ListToDo extends Component {
  state = {
    listToDos: [
      { id: 1, title: "Reading Book" },
      { id: 2, title: "Making Dinner" },
    ],
  };

  addNewToDo = (todo) => {
    this.setState({
      listToDos: [...this.state.listToDos, todo],
    });
  };

  render() {
    let { listToDos } = this.state;
    return (
      <div className="list-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />
        <div className="list-todo-content">
          {Array.from(listToDos).map((item, index) => {
            return (
              <div className="todo-child" key={item.id}>
                <span>
                  {index + 1}. {item.title}
                </span>
                <div className="todo-child2">
                  <button>Edit</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
