import styled from 'styled-components'

export const Tr = styled.tr`
    :nth-child(odd) {
        background: DeepSkyBlue;
    }

    :nth-child(even) {
        background: cyan;
    }
`

export const Td = styled.td`
    width: ${props => (props.width ? props.width : '150px')};
    text-align: left;
    padding: 10px 5px 10px 5px;
`

export const CommentDiv = styled.div`
    background-color: papayawhip !important;
    margin-top: 20px;
    padding: 20px;
`
export const PostDiv = styled.div`
    background-color: SpringGreen !important;
    margin-top: 20px;
    padding: 20px;
`
