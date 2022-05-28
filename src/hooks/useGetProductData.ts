import { useState,useEffect } from "react"
import axios from "axios"
import { ResponsDataType } from "../types_todo";


export const useGetServerData = () => {

    const[data,setData] = useState<ResponsDataType[]>([])
    const URL = `https://fakestoreapi.com/products`

    useEffect(() => {
        axios.get(URL)
        .then(response => response.data)
        .then((json)=> setData(json))
    },[])

    return data
};
