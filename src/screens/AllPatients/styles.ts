import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`
export const Content = styled.View`
   flex: 1;
   
`
export const FlatContent = styled.View`
   
`

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};

`

