import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle}) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={({ target }) =>{ 
        handleToggle(todo.id);
        target.classList.add('complete');
      }}>
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
