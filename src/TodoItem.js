import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo() {
    this.props.updateTodo(this.props.id);
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
      </li>
    );
  }
}

export default TodoItem;
