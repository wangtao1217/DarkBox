import React, { useEffect } from 'react'

import { category } from '../../../../api/home';

const Category = () => {
    useEffect(() => {
        category(10).then(res => {
            console.log("res.............");
            console.log(res);
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Category
