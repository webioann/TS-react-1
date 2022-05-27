import React,{ useState,useRef,useEffect } from 'react'
import { useGetServerData } from '../hooks/useGetServerData'
import './app.scss'

interface inputProps {
    addTodo(todo_title: string): void;
    newId: number
}

const Input : React.FC<inputProps>= ({ addTodo,newId }) => {

    let data = useGetServerData()
    const[todo_title,setTitle] = useState<string>('')
    const[request,setRequest] = useState<boolean>(false)
    const[print,setPrint] = useState<boolean>(false)
    const[placeholder,setPH] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(todo_title) {
            addTodo(todo_title)
            setTitle('')
            setPH('')
            setRequest(false)
            setPrint(false)
        }
        if(!todo_title && print) {
            setPH('new todo not created')
            setRequest(false)
            setPrint(false)
        }
        if(request) {
            let currentData = data.filter(unit => unit.id === newId)
            addTodo(currentData[0].title)
            setTitle('')
            setPH('')
            setRequest(false)
            // setPrint(false)
        }
    },[request,print])
    // console.log(`DATA = ${JSON.stringify(data)}`);

    return (
        <div className='form'>
            <label htmlFor='input'>enter todo</label>
            <div className='row'>
                <input
                    ref={inputRef}
                    type='text'
                    id='input'
                    value={todo_title}
                    placeholder={placeholder}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                />
                <div className='btn-wrapper'>
                    <span onClick={() => setPrint(true)} className='button'>create new todo</span>
                    <span onClick={() => setRequest(true)} className='button second'>todos from server</span>
                </div>
            </div>
        </div>
    )
}

export default Input 