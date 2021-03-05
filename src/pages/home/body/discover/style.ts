import { useState } from "react";
import styled from 'styled-components'
import { _flex } from '../../../../utils/mixin'


export const home_css = {
    padding_side: "30px",
}
const { padding_side } = home_css



export const Section = styled.section`
        width: 100%;
        height: 270px;
        display:grid;
        grid-template-rows: 50px 1fr 1fr;
        grid-template-columns: ${padding_side} repeat(5,1fr) ${padding_side};
           .title{ 
               color: white;
               font-size:24px;
           ${_flex({ row: "flex-start" })};
            margin-left:10px;
            grid-column: 2 / 3;
           }
           .button{
           ${_flex({})};
               color:white;
            grid-column: 1/2;
            grid-row: 2/3;

           }
           .line{
               width: 100%;
               height: 100%;
           ${_flex({ row: "flex-start" })};
           grid-column: 2/ 7;
           
           }
           .new{

               .content{
                       width:100%;
                   height: 40px;
                   img{
                   width:20px;
                   }
                   .s{
                       white-space:nowrap;
                       overflow:hidden;
                       text-overflow:ellipsis;
                       width:100px;
                   }
                   .name{
                       font-size:16px;
                       margin-bottom:5px;
                   }
                   .artist{

                       color:${({theme})=>theme.text.secondary};
                   }
               }
           }

`