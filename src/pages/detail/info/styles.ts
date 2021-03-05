import styled from "styled-components";
import { _flex } from '../../../utils/mixin'

const tag_size = 12;
const img_size = 180;
const border = "box-sizing: border-box;";

export const Container = styled.section`
    display: grid;
    grid-template-columns: ${img_size}px 1fr;
    ${border}
    column-gap: 20px;
    width:100%;
    .text{
        padding: 10px 0;
        width:100%;
        ${_flex({ direc: "column", row: "flex-start", })}
    }
    .img{
        width: ${img_size}px;
        background-color: ${(p) => p.theme.bgc.sping};
        margin-right: 10px;
    }
    img{
            width: 100%;
        }
    .des{ 
        color: ${(p) => p.theme.text.secondary};
        font-size: 14px;
        max-height: 170px;
        width:500px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-top:12px;
    }
    .tags{
        margin-top: 10px;
        margin-bottom:auto;
        span{
            height:${tag_size}px;
            width:auto;
            color: ${(p) => p.theme.text.secondary};
            font-size: 14px;
            line-height: 14px;
            margin-right:15px;
        }
    }

    .title{
        color: white;
        display: flex;
        font-size:30px;
        margin-bottom: 10px;
        flex-direction: column;
        max-width:600px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        }
`;
export const Button = styled.span`
    padding: 7px 16px;
    border-radius: 30px;
    background: linear-gradient(45deg, #1b6cf6, #6868f8);
    color: white;
    position:relative;
    overflow:hidden;
    cursor: pointer;
    margin-right: 10px;
    &:hover{
        opacity:.8;
    }
   
`