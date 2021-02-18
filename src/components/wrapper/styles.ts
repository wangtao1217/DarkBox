import styled from 'styled-components'

const Container = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }
    overflow: scroll;
    height: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    background-color: #1f1f1f;
    padding-top: 36px;
`
export { Container }
