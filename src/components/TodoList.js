import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
  	const listElements = props.list.map(element => <li key={element.id} id={element.id} onClick={() => props.remove(element.id)}> {element.text} </li>)
  	return (
    <ol className={style.TodoList}>{listElements}</ol>
  )
}

export default TodoList;