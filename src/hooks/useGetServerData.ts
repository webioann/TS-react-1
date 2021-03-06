import { useState,useEffect } from "react"
import axios from "axios"
import { ResponsDataType } from "../types_todo";


export const useGetServerData = () => {

    const[data,setData] = useState<ResponsDataType[]>([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.data)
        .then((json)=> setData(json))
    },[])

    return data
};

