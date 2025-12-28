import React from 'react'

const AddTodo = () => {
  return (  
      <div className="container text-center">
        <div className="row item-list">
          <div className="col-4">
            <input type="text"  placeholder="Enter todo here"/>
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2"><button className="btn btn-primary item-button">Add</button></div>

        </div>
        </div>
  )
}

export default AddTodo