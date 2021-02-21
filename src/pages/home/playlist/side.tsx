import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(${({show})=>show?0:"500px"});
    background-color: red;
    padding: 10px 20px;  
    box-sizing: border-box;
    transition: .2s;
`

const Side = ({children, show}) => {
    return (
        <Container show={show}>
            {children}
        </Container> 
    )
}

export default Side
 