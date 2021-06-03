import React from 'react' 
import FileUploader from './FileUploader'

class NewTaskForm extends React.Component {

    state={
        name:"",
        image:"",
        priority:"Low",
        startDate:"",
        endDate:""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]:e.target.value
        })
      }
    
      handleSubmit = (e) => {
          e.preventDefault()
        fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskName: this.state.name,
        image: this.state.image,
        priority:this.state.priority,
        startDate:this.state.startDate,
        endDate:this.state.endDate
        }
      ),
    })
      .then((r) => r.json())
      .then((newTask) => {
        this.props.addTask(newTask)
      });
    
      }

    render() {
        return(
            <div className="container">
            <form className="add-task-form" 
            onSubmit={this.handleSubmit}
            >
              <h3>Enter a task</h3>
              <input 
              type="text" 
              name="name" 
              placeholder="What is your task?" 
              className="input-text"
              value={this.state.name}
              onChange={this.handleChange}
              />
              <br/>
              {/* <FileUploader */}
                {/* // onFileSelectSuccess={(file) => setSelectedFile(file)}
                // onFileSelectError={({ error }) => alert(error)} */}
              {/* /> */}
              <br/>
              <select name="priority" 
              id="priority"
              className="select-priority"
              label="Priority"
              value={this.state.priority}
              onChange={this.handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input type="date" 
              id="start" 
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
              min="2020-01-01" 
              max="2024-12-31">
              </input>
              <br/>
              <input type="date" 
              id="end" 
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleChange}
              min="2020-01-01" 
              max="2024-12-31">
              </input>
              <br/>
              <input 
              type="submit" 
              name="submit" 
              value="Create New Task" 
              className="submit"
              />
            </form>
          </div>
        )
    }
}

export default NewTaskForm