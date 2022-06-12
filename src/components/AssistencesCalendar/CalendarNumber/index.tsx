import React from 'react'

import { Container, Number, NumberContent, Text, TextContent } from './styles'

interface Props{
    value: number | string;
    isActive?: boolean;
    shouldRender?: boolean;
}

export function CalendarNumber({value, isActive, shouldRender}: Props){
    const isString = typeof value === 'string' ? true : false
   
    

    return(
    <Container >
        {
            isString ? 
            <TextContent>
                <Text>
                    {value}
                </Text>
            </TextContent>
            :
            <NumberContent isActive={isActive} style={shouldRender ? {backgroundColor:'#f0f2f5'}: {}}>
                <Number style={shouldRender && {color:'#f0f2f5'}}>
                    {value}
                </Number>
            </NumberContent>

        }
        
    </Container>
    )
}