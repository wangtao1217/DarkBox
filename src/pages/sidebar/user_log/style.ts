import styled from 'styled-components'

export const LogContainer = styled.section`
        cursor: pointer;
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .user-name{
        margin-left: 5px;
        color: ${p => p.theme.text.primary};
        font-size: 16px;
    }
    .login{
        
    }
    transition :.2s;
`