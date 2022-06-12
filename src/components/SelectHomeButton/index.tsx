import React from 'react'

import { Container, Title } from './styles'

interface Props {
    homeCareName: string;
      
    onPress: () => void;
}



export function SelectHomeButton({homeCareName, onPress}: Props) {
    return(
    <Container
    isActive
    onPress={onPress}
    >
        <Title>{homeCareName}</Title>
    </Container>
    )
}