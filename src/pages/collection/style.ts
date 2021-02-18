import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${p => p.theme.bgc.primary};
    display: grid;
    grid-template-columns: repeat(5,1fr);
    justify-items: center;
    padding: 36px 60px;
    align-content: c;
    box-sizing: border-box;
    overflow-x: scroll;
`
export const Item = styled.div`
    height: 200px;
    width: 145px;
    margin-bottom: 27px;
`