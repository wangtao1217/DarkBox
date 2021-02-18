import styled from 'styled-components'

export const LogContainer = styled.section`
        cursor: pointer;
    width: 100%;
    height: 60px;
    /* background-color: white; */
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    .user-name{
        margin-left: 10px;
        color: ${p => p.theme.text.primary};
        font-size: 18px;
    }
    .login{
        
    }
    transition :.2s;
    &:hover{
        background-color: white;
    }
`