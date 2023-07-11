import React from 'react'
import Todo from "./todo.js";
export default function ToDoApplication() {
  return (
    <>
     <div className="container">
       <div className="row">
        <div className="col-md-4  border m-auto my-5">
          <Todo />
        </div>
       </div>
       </div>
       </>
   
  )
}

