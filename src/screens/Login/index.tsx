import React from 'react'
import  Calendarr  from '../../components/Calendar'

import { Container, Content, Input, Login,ButtonContent, Button } from './styles'

export function LoginScreen(){
    return(
    <Container>
        {/* <Content>
            <Login>Login:</Login>
            <Input/>
            <Login>Senha:</Login>
            <Input/>
            <ButtonContent>
                <Button>
                    <Login>Entrar</Login>
                </Button>
            </ButtonContent>
        </Content> */}
        <Calendarr/>
    </Container>
    )
}