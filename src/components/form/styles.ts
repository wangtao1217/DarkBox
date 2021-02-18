
import styled from "styled-components";

const Log_container = styled.div<{ closed: boolean }>`
    position:fixed;
    top: 0; left: 0;
    height: 30vh;
    width: 30vw;
    background-color: ${p => p.theme.bgc.primary};
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    z-index: 300;
    transform:translateY(${p => p.closed ? 0 : "-100vh"});
    transition:.6s;
    input
    {
        position:relative;
        outline: none;
        width:240px;
        border-radius:10px;
        border:5px solid white;
        background-color: ${p => p.theme.bgColor};
        padding: 21px 18px;
        margin-bottom:24px;
        color: #1b1b1b;
       
    }
    .hide{
        position:absolute;
        padding:20px;
        background-color:white;
        right:20px;
        top:50%;
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
            box-shadow:0 0px 7px 3px rgba(100,100,100,.4);
        }
    }
    .close{
        cursor:pointer;
        position:absolute;
        top:20px;
        right:36px;
        color:white;
        font-size:36px;
        transition:.4s;
        &:hover{
            transform: scale(1.2);
            color:#e3e3e3;
        }
    }
`;

export default Log_container;