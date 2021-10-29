import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CharacterCard from './CharacterCard';

function CharacterIndex() {
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetchAllCharacters();
    }, []);

    const fetchAllCharacters = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/people");
            const data = await response.json();
            setCharacterList(data['results']);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <List>
                {characterList.map((character, index) => {
                    console.log(index);
                    return <CharacterCard key={index} character={character} />
                })}
            </List>
        </Container>
    )
}

export default CharacterIndex

const Container = styled.div`
    display: flex;
    color: white;
    max-width: 1440px;
    background: #080808ad;
    margin: 30px auto;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 0;
    justify-content: space-between;
`;