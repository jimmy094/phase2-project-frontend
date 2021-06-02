import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTaskForm from './components/NewTaskForm'
import SearchTasks from './components/SearchTasks'
import TaskList from './components/TaskList'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {

state = {
  tasks: [],
}


componentDidMount = () => {
  fetch("http://localhost:3000/tasks")
    .then(res => res.json())
    .then(tasksArr => {
      this.setState({
        tasks: tasksArr
      })
    })
}

addTask = (newTask) => {
  let taskArr = [...this.state.tasks, newTask]
  this.setState({
    tasks: taskArr
  })
}

deleteTask = (taskID) => {
  let taskArr = this.state.tasks.filter(task => task.id !== taskID)
  this.setState({
    tasks: taskArr
  })
}


  render() {
  return (
    <div className="App">
      <header className="App-header">
       <NewTaskForm addTask={this.addTask}/>
       <SearchTasks />
      </header>
      <div>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    </div>
  );
}
}

export default App;
