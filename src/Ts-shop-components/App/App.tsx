import React,{ useState,useEffect } from 'react'
import Container from '../Container/Container'
import { useGetProductData } from '../../hooks/useGetProductData'
import Card from '../Card/Card'

const App:React.FC = () => {

    const[click,setClick] = useState<boolean>(false)
    const[data,setData] = useState<string>('')
    const product = useGetProductData()


    useEffect(() => {
        // let raw = product.filter(unit => unit.id === 2)
        setData('dattta')
        console.log(JSON.stringify(product));
        // console.log(typeof raw);
    },[click])

    return (
        <Container>
            <span onClick={() => setClick(!click)}>{data}</span>
            <Card/>
        </Container>
    )
}

export default App;