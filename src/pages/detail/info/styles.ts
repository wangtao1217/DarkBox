import styled from 'styled-components'

const tag_size = 12
const img_size = 160

const Container = styled.section`
    height: fit-content;
    width: 100%;
    display: flex;
    padding: 12px;
    background-color: ${p => p.theme.bgc.secondary};
    box-sizing: border-box;
    .m{
        margin: 10px 0 ;
    }
    p{
        margin: 0;
    }
    .img{
        height: ${img_size}px;
        width: ${img_size}px;
        background-color: ${p => p.theme.bgc.sping}
        
    }
    img{
            width: 100%;
        }.text{
        color:white;
        font-size: 18px;
    }
    .description{
        color: ${p => p.theme.text.secondary};
        font-size: 14px;
        max-height: 170px;
        overflow: overlay;
    }
    .tags{
        span{
            height:${tag_size}px;
            width:auto;
            margin:0 5px; 
            padding: 4px 10px;
            color: ${p => p.theme.text.secondary};
            background-color: ${p => p.theme.bgc.secondary};
            font-size: 12px;
            line-height: 14px;
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        margin-left:10px;
    }
`

export { Container }