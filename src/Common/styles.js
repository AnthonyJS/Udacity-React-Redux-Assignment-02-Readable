import styled from 'styled-components'

export const Tr = styled.tr`
    :nth-child(odd) {
        background: #eee;
    }
`

export const Td = styled.td`
    width: ${props => (props.width ? props.width : '150px')};
    text-align: left;
`
