import styled from 'styled-components'
import { _flex } from '../../../utils/mixin'


export const home_css = {
    padding_side: "30px",
  }
const { padding_side } = home_css

const Container = styled.div`
    overflow: scroll;
    height: 100%;
    padding: 30 ${padding_side};
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    background-color: ${p => p.theme.bgc.primary};
    &::-webkit-scrollbar {
        display: none;
    }
    .container{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
    .banner{
        background-color: ${p => p.theme.bgc.secondary};
        margin: 12px;
    }
    .songs{
        background-color: ${p => p.theme.bgc.secondary};
        margin: 12px;
    }
    .item{
        margin: 0 10px;
        height: auto;
        width: 100%;
        /* display: flex; */
    }
   
    .albumns{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
        .title{
            display: flex;
            flex: 1;
        }
        
    }
`
export { Container }
