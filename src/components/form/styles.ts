
import styled from "styled-components";

const Log_container = styled.div<{ closed: boolean }>`
    position:fixed;
    top: 0; left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    z-index: 300;
    transform:translateY(${p => p.closed ? 0 : "-100vh"});
    transition:.3s;
    .main{
        position:relative;
    background-color: ${p => p.theme.bgc.secondary};
    height: 240px;
    width: 320px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
   padding: 20px 10px;
    }
    input
    {
        position:relative;
        outline: none;
        width:200px;
        border-radius:2px;
        border:5px solid white;
        background-color: ${p => p.theme.bgColor};
        padding: 12px 18px;
        margin-bottom:24px;
        color: #1b1b1b;
       
    }
 button
    {
        cursor:pointer;
        padding:16px 36px;
        color:white;
        background-color:${p => p.theme.bgColor};
        outline:none;
        border:none;
        border-radius:7px;
        &:hover{
            background-color: red;
        }
    }
    .close{
        cursor:pointer;
        position:absolute;
        top:5px;
        right:10px;
        color:white;
        font-size:18px;
        transition:.2s;
        &:hover{
            transform: scale(1.1);
            color:#e3e3e3;
        }
    }
`;

export default Log_container;