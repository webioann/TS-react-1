import React,{ useState,useRef,useEffect } from 'react'
import { useGetServerData } from '../hooks/useGetServerData'
import './app.scss'

interface inputProps {
    addTodo(todo_title: string): void;
    newId: number
}

const Input : React.FC<inputProps>= ({ addTodo,newId }) => {

    let data = useGetServerData(newId)
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
            addTodo(`data[0].title`)
            setTitle('')
            setPH('')
            setRequest(false)
            // setPrint(false)
        }
        if(!todo_title) {
            setPH('new todo not created')
        }

    },[request,print])

    // const createTodo = (event: React.MouseEvent) => {
    // }
    // useEffect(() => {
    //     createTodo
    // },[request])
    // console.log(`data.todo_title = ${data.title}`);
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