import React, { FC } from 'react'
import { IChildrenProps } from '../../types_shop'
import './container.scss'

const Container:React.FC<IChildrenProps> = ({ children }) => {
    return (
        <div className='containet-fluid'>
            <div className='container'>
                <h1>
                    TS SHOP
                    { children }
                </h1>
            </div>
        </div>
    )
}

export default Container;