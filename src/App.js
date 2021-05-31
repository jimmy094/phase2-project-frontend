import logo from './logo.svg';
import './App.css';
import NewTaskForm from './components/NewTaskForm'
import SearchTasks from './components/SearchTasks'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NewTaskForm/>
       <SearchTasks/>
      </header>
      <div>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
