import styled from 'styled-components'
import { Container } from '../../../styles'


const color = props => props.theme.bgc.primary
const sider_css = {
    padding: 15,
    width: 270,
    item_space: 12
}

const Top_Container = styled(Container)`
    height: 100%;
    width: 100%; 
    background-color: ${props => color(props)};
    box-sizing: border-box;
    padding: 16px 50px;
    justify-content: space-between;
    .link{
        text-decoration: none;
        color: ${props => props.theme.text.secondary};
    }
    span{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        font-size: 18px;
        display: flex;
        width: auto;
        height: 100%;
        align-items: center;
    }
    
`
const Span = styled.span<{ active: boolean }>`
    transition: .2s;
    position:relative;
    margin: 10px;
    color:${p => p.active ? p.theme.text.primary : p.theme.text.secondary};
         &:hover{
             color:${p => p.theme.text.primary};
         } 
    &::before{
        position: absolute;
        content: '';
        left:10%;
        bottom: -8px;
        width: 80%;
        height:  ${p => p.active ? 6 : null}px;
        border-radius: 4px;
        background-color: ${p => p.active ? p.theme.bgc.active : p.theme.text.secondary}; 
    }
`
export { Top_Container, Span }