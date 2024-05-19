import React from 'react'
import TodoItem from "./TodoItem"

const todos = (props) => {
  
  return (
    <div className="container my-3">
      <h3 className=" my-3">Todos List</h3>

      {props.todos.length===0 ? "No Todos to Dispaly!!" :
      props.todos.map((todo)=> 
      {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
      }
    </div>  
  )
}

export default todos
