import React,{ useState } from 'react'
import './card.scss'

type props = {
    image?: string
}

const Card:React.FC<props> = ({ image }) => {

    

    return (
        <div className='card'
            style={{backgroundImage: `url(${image})`}}>
            Card
        </div>
    )
}

export default Card