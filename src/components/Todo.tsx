import React from 'react'
import { FiDelete } from 'react-icons/fi'
import { ImCheckboxChecked,ImCheckboxUnchecked } from 'react-icons/im'
import { TodoProps } from '../types'
import './app.scss'

const Todo: React.FC<TodoProps> = ({ todos,onCheckTodo,onRemoveTodo }) => {

    return (
        <ul>
            {todos.map(todo => (
                <li className='todo' key={todo.id}>
                    { todo.complete 
                        ? <ImCheckboxChecked 
                            onClick={() => onCheckTodo(todo.id)} 
                            className='checkbox'/> 
                        : <ImCheckboxUnchecked 
                            onClick={() => onCheckTodo(todo.id)} 
                            className='checkbox'/> }
                    <p className={todo.complete ? 'todo-title completed' : 'todo-title notcompleted'}>{todo.title}</p>
                    <FiDelete className='delete' onClick={() => onRemoveTodo(todo.id)}/>
                </li>

            ))}
        </ul>
    )
}

export default Todo;