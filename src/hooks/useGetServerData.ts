import { useState,useEffect } from "react"
import axios from "axios"
import { ResponsDataType } from "../types";


export const useGetServerData = (index:number) => {

    const[data,setData] = useState<ResponsDataType[]>([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then((response) => response.data())
        .then((data)=> setData(data))
    },[])

    return data
};

