import React,{ useState,useRef } from 'react'
import './app.scss'

interface inputProps {
    addTodo(title: string): void,
}

const Input : React.FC<inputProps>= ({ addTodo }) => {

    const[title,setTitle] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const createTodo = (event: React.MouseEvent) => {
        addTodo(title)
        setTitle('')
    }

    return (
        <div className='form'>
            <label htmlFor='input'>enter todo title</label>
            <div className='row'>
                <input
                    ref={inputRef}
                    type='text'
                    id='input'
                    value={title}
                    onChange={changeHandler}
                />
                <span onClick={createTodo} className='button'>new todo</span>
            </div>
        </div>
    )
}

export default Input 