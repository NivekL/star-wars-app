import React from 'react'
import styled from 'styled-components'

function CharacterList({character}) {
    return (
        <Card>
            {character.name}
        </Card>
    )
}

export default CharacterList

const Card = styled.li`
    width: 30%;
    height: auto;
    margin: 20px;
    font-size: 23px;
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background: #0e0e0e40;
`
