import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  
  const todoList = todos.length ? (
    //grabbing each to do separately and firing function
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">The world is safe for democracy!</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos