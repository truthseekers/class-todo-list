import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>Todo Item: {this.props.title}</li>;
  }
}

export default TodoItem;
