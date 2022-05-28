import React,{ useState,useRef } from 'react'
import Input from './Input'
import Todo from './Todo'
import { Itodo } from '../types_todo'
import './app.scss'

const App: React.FC = () => {

    const[todos,setTodos] = useState<Itodo[]>([])
    let count = useRef<number>(1)

    const addTodo = (todo_title: string) => {
        let newTodo: Itodo = {
            userId: 1,
            id: count.current,
            title: todo_title,
            complete: false
        }
        setTodos(prev => [newTodo, ...prev])
        count.current++
    }
    const checkTodo = (id: number) => {
        setTodos(
            todos.map(todo => {
                if( todo.id === id ) {
                    todo.complete = !todo.complete
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
            <Input addTodo={addTodo} newId={count.current}/>
            <Todo todos={todos} onCheckTodo={checkTodo} onRemoveTodo={removeTodo}/>
        </div>
    )
}

export default App;