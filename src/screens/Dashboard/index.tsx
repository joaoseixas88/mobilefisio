
import React from 'react'
import { TouchableOpacity } from 'react-native'



import { Container, Content, Header, Text, Title } from './styles'



export function Dashboard(){
    return(
        <Container>
            <Header>
                <Title>Titulo</Title>
            </Header>
            <Content>
                <Text>
                    Content
                </Text>
                <TouchableOpacity>
                    <Text>
                        Button
                    </Text>
                </TouchableOpacity>
            </Content>
        </Container>
    )
}