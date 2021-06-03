import React from 'react' 
import { Input } from 'semantic-ui-react'

const Filter = props => {

    let handleChange = (e) => {
        props.filterPriority(e.target.value)
      }
    
        return(
            <div>
                <select name="priority" 
              id="priority"
              className="select-priority"
              label="Priority"
              value={props.filter}
              onChange={handleChange}
              >
                <option value="All">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
                
            </div>
        )
}

export default Filter;