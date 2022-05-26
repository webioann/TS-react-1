import React,{ useState,useEffect } from 'react'
import Input from './Input'
import Todo from './Todo'
import { Itodo } from '../types'
import './app.scss'

const App: React.FC = () => {

    const[todos,setTodos] = useState<Itodo[]>([])

    const addTodo = (title: string) => {
        let newTodo: Itodo = {
            id: Date.now(),
            title: title,
            complite: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const checkTodo = (id: number) => {
        setTodos(
            todos.map(todo => {
                if( todo.id === id ) {
                    todo.complite = !todo.complite
                }
                return todo
            })
        )
    }
    const removeTodo = (id: number) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return (
        <div className='container'>
            <Input addTodo={addTodo}/>
            <Todo todos={todos} onCheckTodo={checkTodo} onRemoveTodo={removeTodo}/>
        </div>
    )
}

export default App;