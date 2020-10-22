import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initialTodos } from "./data";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: initialTodos,
      textField: "",
    };

    this.updateTodo = this.updateTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodos = [
      ...this.state.todos,
      {
        id: this.state.todos.length,
        title: this.state.textField,
        isCompleted: false,
      },
    ];
    this.setState({
      todos: newTodos,
      textField: "",
    });
  }

  handleNameFieldChange(e) {
    let newTextField = e.target.value;
    this.setState({
      todos: this.state.todos,
      textField: newTextField,
    });
  }

  updateTodo(updatedId) {
    let newTodos = [...this.state.todos];
    newTodos.forEach((elem) => {
      if (elem.id == updatedId) {
        elem.isCompleted = !elem.isCompleted;
      }
    });
    this.setState({
      todos: newTodos,
      textField: this.state.textField,
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h3>Todos List</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.textField}
              onChange={this.handleNameFieldChange}
              placeholder="Todo Item"
              name="name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Current Todos:</h3>
        <TodoList updateTodo={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
