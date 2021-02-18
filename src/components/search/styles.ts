import styled from 'styled-components'
import { sider_css } from '../../pages/sidebar/styles'

const { width, padding, item_space } = sider_css

const Wrapper = styled.div`
   
   width: ${width-padding*2}px;
    input{
        height: 60px;
        width: 100%;
        font-size: 16px;
        border-radius: 5px;
        color: #b1b1b1;
        background-color: ${props => props.theme.bgc.secondary};
        padding: 0 15px;
        border: none;
        outline: none;
        margin-bottom: ${item_space}px;
        box-sizing: border-box;
    }
`

export { Wrapper }