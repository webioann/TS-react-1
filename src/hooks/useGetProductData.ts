import { useState,useEffect } from "react"
import axios from "axios"

export const useGetProductData = () => {

    const[prod,setData] = useState([])
    const URL = `https://fakestoreapi.com/products?limit=2`

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(result=> setData(result))

    },[])

    return prod
};
