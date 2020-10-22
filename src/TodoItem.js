import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateTodo() {
    this.props.updateTodo(this.props.id);
  }

  deleteTodo() {
    console.log("deleted!", this.props.id);
    this.props.deleteTodo(this.props.id);
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.isCompleted}
          onChange={this.updateTodo}
        />
        Todo Item: {this.props.title}
        <span onClick={this.deleteTodo} style={{ fontWeight: "bold" }}>
          delete
        </span>
      </li>
    );
  }
}

export default TodoItem;
