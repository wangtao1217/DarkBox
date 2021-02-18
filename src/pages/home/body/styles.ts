import styled from 'styled-components'

const Container = styled.div`
    overflow: scroll;
    height: 100%;
    padding: 30 50px;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    background-color: ${p => p.theme.bgc.primary};
    &::-webkit-scrollbar {
        display: none;
    }
    .container{
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-rows: auto 220px;
        column-gap: 20px;
        row-gap: 15px;
        height: 100%;
        width: 100%;
        /* padding: 20px 36px; */
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
        height: 100%;
        width: 136px;
        display: flex;
    }.wrapper{
            display: flex;
            
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
