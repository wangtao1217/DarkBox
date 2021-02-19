import styled from "styled-components";

const tag_size = 12;
const img_size = 120;
const border = "box-sizing: border-box;";

const Container = styled.section`
    display: flex;
    padding: 12px;
    background-color: ${(p) => p.theme.bgc.secondary};
    margin-bottom:10px;
    ${border}
    p{
        margin: 0;
    }
    .img{
        height: ${img_size}px;
        width: ${img_size}px;
        background-color: ${(p) => p.theme.bgc.sping};
        margin-right: 10px;
    }
    img{
            width: 100%;
        }.text{
        color:white;
        font-size: 18px;
    }
    .description{
        color: ${(p) => p.theme.text.secondary};
        font-size: 14px;
        max-height: 170px;
        overflow: overlay;
    }
    .tags{
        margin-top: auto;
        span{
            height:${tag_size}px;
            width:auto;
            padding: 4px 10px;
            color: ${(p) => p.theme.text.secondary};
            background-color: ${({ theme }) => theme.bgc.primary};
            font-size: 12px;
            line-height: 14px;
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        margin-left:10px;
    }
`;

export { Container };
