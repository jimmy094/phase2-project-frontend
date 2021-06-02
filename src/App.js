import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTaskForm from './components/NewTaskForm'
import SearchTasks from './components/SearchTasks'
import TaskList from './components/TaskList'
import 'semantic-ui-css/semantic.min.css'
import Headers from './components/Headers'

class App extends Component {

state = {
  tasks: [],
  searchTerm: ""
}

changeSearchTerm = (newTerm) => {
  this.setState({
    searchTerm: newTerm
  })
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

// deleteTask = (taskID) => {
//   let toysArr = this.state.tasks.filter(task => task.id !== taskID)
//   this.setState({
//     tasks: tasksArr
//   })
// }

  render() {

let {tasks, searchTerm} = this.state

// let filteredTasks = tasks.filter((taskObj, idx) => {
//   return taskObj.name.toLowerCase().includes(searchTerm.toLowerCase())
// })

  return (
    <div className="App">
     <header>
      <Headers />
      </header>
      <div>
       <NewTaskForm />
       <SearchTasks searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
       </div>

      <div>
        <TaskList tasks={this.state.tasks}/>
      </div>
    </div>
  );
}
}

export default App;

        
