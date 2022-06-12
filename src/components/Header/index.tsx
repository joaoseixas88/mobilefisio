import React from 'react'
import { View } from 'react-native'

import { Container, Title } from './styles'

interface Props{
    title: string
    children?: React.ReactNode
}

export function Header({title, children}: Props){
    return(
    <Container>
        {children}
        <Title>{title}</Title>
    </Container>
    )
}