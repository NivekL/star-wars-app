import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CharacterCard from './CharacterCard';

function CharacterIndex() {
    const [characterList, setCharacterList] = useState([]);
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');
    const url = "https://swapi.dev/api/people/";
    useEffect(() => {
        fetchAllCharacters(url);
    }, []);

    const fetchAllCharacters = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCharacterList(data['results']);
            setNext(data.next);
            setPrev(data.previous);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Container>
                <List>
                    {characterList.map((character, index) => {
                        return <CharacterCard key={index} character={character} />
                    })}
                </List>
            </Container>
            <Pagination>
                <PreviousBtn className={prev === null ? "disabled" : "active"} onClick={() => fetchAllCharacters(prev)} disabled={prev === null ? true : false}>&lt;</PreviousBtn>
                <NextBtn className={next === null ? "disabled" : "active"} onClick={() => fetchAllCharacters(next)} disabled={next === null ? true : false}>&gt;</NextBtn>
            </Pagination>
        </div>
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

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;

    .active {
        cursor: pointer;
        color: #ffffff;
        text-shadow: 
            0 0 7px #0060ff, 
            0 0 17px #0030df, 
            0 0 21px #87b0f7, 
            0 0 42px #1e4da3, 
            0 0 82px #1e4da3;
    }

    .disabled {
        color: #ffffff;
        text-shadow: 
            0 0 7px #ff0000, 
            0 0 17px #ff0000, 
            0 0 21px #f78c87, 
            0 0 42px #a31e1e, 
            0 0 82px #a31e1e;
    }
`;

const PreviousBtn = styled.button`
    background: transparent;
    border: none;
    font-size: 55px;
    font-weight: 100;
    margin: 0 50px;
`;

const NextBtn = styled(PreviousBtn)`

`;