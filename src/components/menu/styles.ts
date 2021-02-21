import styled, { } from 'styled-components'
import { sider_css } from '../../pages/sidebar/styles'

const { width, padding, item_space } = sider_css
const height = 42

export const Container = styled.div`
        width: 100%;
    height: auto;
    .link {
    text-decoration: none;
    color:${props => props.theme.text.secondary}
    }
    color:white; 

`

export const Item_wrapper = styled.span<{ active: boolean }>`
    width: 100%;
    height: ${height}px;
    display: flex;
    align-items: center;
    margin-bottom: ${item_space}px;
    padding: 0 10px;
    box-sizing: border-box;
    span{
        display: flex;
        justify-content: center;
        align-items: center;  
        color: ${p => p.active ? p.theme.text.primary : p.theme.text.secondary}; 
        transition: 0.2s;
    }
    &:hover{
            color: white;
    }
    &::before{
        position: absolute;
        content: '';
        left:0;
        height: ${height}px;
        width: ${p => p.active ? 4 : 0}px;
        background-color: ${p => p.theme.bgc.active};
    }
    .icon{
        height: ${height}px;
        width: ${height}px;
     
    }
    
`

