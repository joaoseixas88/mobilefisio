import React from 'react'

import { Text } from './styles'

interface Props {
    text: string
}

export function CommomText({text}: Props) {
    return(
    <Text>
        {text}
    </Text>
    )
}