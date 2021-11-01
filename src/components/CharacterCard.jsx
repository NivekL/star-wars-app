import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function CharacterList({character}) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Card onClick={() => setShowInfo(!showInfo)}>
            <CardName>{character.name}</CardName>
            {showInfo && 
                <CardInfo>
                    <p>Gender: {character.gender}</p>
                    <p>Birth year: {character.birth_year}</p>
                </CardInfo>
            }
        </Card>
    )
}

export default CharacterList

const Card = styled.li`
    cursor: pointer;
    width: 30%;
    height: 30%;
    margin: 20px;
    padding: 30px;
    box-sizing: border-box;
    border-top: 1px solid #3c3c3c;
    border-bottom: 1px solid #3c3c3c;
    background: #0e0e0e40;
    transition: height 0.3s ease-out;
    font-family: 'Helvetica', sans-serif;

    @media screen and (max-width: 1200px) and (min-width: 768px) {
        width: 43%;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

const CardInfo = styled.div`
    padding-left: 10px;
    border-top: 1px solid #303030;
    border-bottom: 1px solid #303030;
`

const CardName = styled.p`
    font-size: 23px;
`
