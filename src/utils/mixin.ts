import styled, { css } from 'styled-components'

export const _text = (
    color = "#2f2f2f",
    size = 14,
) => css`

`

export const _container = (parent = false) => css`
    position: ${parent ? "relative" : null};
`

export const _before = (content = '') => css`
    content: ${content};
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
`

export const Scroll = styled.section`
    &::before{
        ${_before()}
    }
`

export const _flex = ({
    direc = "row",
    row = "center",
    column = "center" ,
    f = "null"
}) => css`
    display: flex;
    flex-direction: ${direc === "column" ? direc : "row"};
    justify-content: ${direc == "column" ? column : row};
    align-items: ${direc == "column" ? row : column};
    flex: ${f?f:"null"};
`