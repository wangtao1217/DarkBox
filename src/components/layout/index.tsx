import * as React from 'react'

import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    height: auto;
    width: 90%;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 15px;
    justify-items: center;
    align-self: start;
`

function Layout({children}) {
    return (
        <Grid>
            {children.map(item =>{
                return item
            })}
        </Grid>
    )
}

export default Layout
