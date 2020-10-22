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
  }

  handleNameFieldChange(e) {
    let newTextField = e.target.value;
    this.setState({
      todos: this.state.todos,
      textField: newTextField,
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h3>Todos List</h3>
        <form>
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
        <TodoList todos={this.state.todos} />
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
