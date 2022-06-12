import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    
    
`
export const Content = styled.View`
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
`

export const Form = styled.View`
    margin: 0 30px;
    margin-bottom: 10px;


`
export const ContentButton = styled.View`
    padding: 18px;
`