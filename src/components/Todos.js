import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "10px auto",
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo) => {
        return (<TodoItem key={todo.sno} todo={todo} onDelete={() => props.onDelete(todo)}/>);
      })}
    </div>
  );
}

export default Todos;
