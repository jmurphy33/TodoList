import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function TodoList(props) {
  const todoItems = props.items;
  const todoItemsList = todoItems.map((item) => <li onClick={props.HandleDone}>{item}</li>);



  return (

    <ul>{todoItemsList}</ul>

  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItems: ["First default item"],
      text: ""
    }

    this.HandleChange = this.HandleChange.bind(this);
    this.HandleDone = this.HandleDone.bind(this);
  }

  TodoList(props) {
    const todoItems = props.items;
    const todoItemsList = props.items.map((item) => <li>{item}</li>);

    return (<ul>{todoItemsList}</ul>);
  }

  AddToList(value) {
    this.setState({
      todoItems: [...this.state.todoItems, value],
      text: ""
    })
  }

  HandleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  HandleDone(event){
    event.target.className = "Done"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List Using React</h1>
        </header>
        <div className="container">
          <div className="row Main">
            <div className="col-lg-2 Empty"></div>
            <div className="col-lg-8 Content" >
              <input id="todoAddInput" type="text" onChange={this.HandleChange} className="FormContent" value={this.state.text} />
              <button className="btn btn-primary FormContent" onClick={(e) => this.AddToList(document.getElementById("todoAddInput").value)}>Add</button>
              <TodoList items={this.state.todoItems} HandleDone={this.HandleDone} />
            </div>
            <div className="col-lg-2 Empty"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
