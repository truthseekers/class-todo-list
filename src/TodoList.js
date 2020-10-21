import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Incomplete Todos</h3>
        <ul style={{ listStyleType: "none" }}>
          {this.props.todos.map((elem) => {
            if (!elem.isCompleted) {
              return <TodoItem key={elem.id} title={elem.title} />;
            }
          })}
        </ul>
        <h3>complete Todos</h3>
        <ul style={{ listStyleType: "none" }}>
          {this.props.todos.map((elem) => {
            if (elem.isCompleted) {
              return <TodoItem key={elem.id} title={elem.title} />;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
