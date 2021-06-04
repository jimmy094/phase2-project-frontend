import React, { Component } from 'react';
import logo from './logo.svg';
import { Chart } from 'react-charts'
import './App.css';
import NewTaskForm from './components/NewTaskForm'
import SearchTasks from './components/SearchTasks'
import TaskList from './components/TaskList'
import 'semantic-ui-css/semantic.min.css'
//import MyChart from './components.Chart'

class App extends Component {
state = {
  tasks: [],
  searchTerm: "",
  // filter: "Low"
}
changeSearchTerm = (newTerm) => {
  this.setState({
    searchTerm: newTerm
  })
}
// The filter function works, but we need a little more time to get it to work properly in conjunction with the search function
// filterPriority= (newFilter) => {
//   this.setState ({
//     filter: newFilter
//   })
// }
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

updateTask=(updatedTask)=>{
  let taskArr = this.state.tasks.map(task=>{
    if (task.id===updatedTask.id) {
      return updatedTask
    } else {
      return task
    }
  })
  this.setState({
    tasks:taskArr
  })
}

render() {
let {tasks, searchTerm, filter} = this.state
let filteredTasks = tasks.filter((taskObj, idx) => {
  // if (searchTerm !== "") {
    return taskObj.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  // } 
  // else {
  //   return taskObj.priority===filter
  // }

})

console.log(tasks, searchTerm,filter)

  return (
    <div className="App">
      <header className="App-header">
       <NewTaskForm addTask={this.addTask}/>
       <SearchTasks searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
      {/* <Filter filter={filter} filterPriority={this.filterPriority}/> */}
      </header>
      <div>
        <TaskList tasks={filteredTasks} deleteTask={this.deleteTask} updateTask={this.updateTask}/>
      </div>
      {/* <div>
        <MyChart/>
      </div> */}
    </div>
  );
}
}

export default App;