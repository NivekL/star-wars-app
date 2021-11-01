import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CharacterCard from './CharacterCard';

function CharacterIndex() {
    const [characterList, setCharacterList] = useState([]);
    const [search, setSearch] = useState('');
    const [next, setNext] = useState('');
    const [loading, setLoading] = useState(false);
    const [prev, setPrev] = useState('');
    const url = search.length > 0 ? `https://swapi.dev/api/people/?search=${search}` : 'https://swapi.dev/api/people/';
    useEffect(() => {
        fetchAllCharacters(url);
    }, [url]);

    const fetchAllCharacters = async (url) => {
       const timer = setTimeout(() => {
            setLoading(true);
        }, 900);
        try {
            console.time("request time");
            const response = await fetch(url);
            const data = await response.json();
            setCharacterList(data['results']);
            clearTimeout(timer);
            setLoading(false);
            setNext(data.next);
            setPrev(data.previous);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <SearchBar type="text" onChange={handleChange} value={search} placeholder="Search..." />
            <Container>
                    {loading ? 
                    <LoadingBar><p>Loading...</p></LoadingBar> 
                    : <List>
                        {characterList.map((character, index) => {
                            return <CharacterCard key={index} character={character} />
                        })}
                      </List> 
                    }
                
            </Container>
            <Pagination>
                <PreviousBtn className={prev === null ? "disabled" : "active"} onClick={() => fetchAllCharacters(prev)} disabled={prev === null ? true : false}>&lt;</PreviousBtn>
                <NextBtn className={next === null ? "disabled" : "active"} onClick={() => fetchAllCharacters(next)} disabled={next === null ? true : false}>&gt;</NextBtn>
            </Pagination>
        </div>
    )
}

export default CharacterIndex

const LoadingBar = styled.div`
    height: 85vh;
    display: flex;
    align-items: center;

    p {
        color: #fff; 
        font-size: 40px;
        font-family: 'Raleway', sans-serif;
    }
`;

const SearchBar = styled.input`
    display: flex;
    justify-self: center;
    margin: 0 auto;
    width: 30%;
    padding: 10px;
    background: #14141494;
    font-size: 21px;
    letter-spacing: 1px;
    color: #dfbc10;
    font-family: 'Raleway';
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-left: 3px solid #ccc;

    @media screen and (max-width: 1200px) and (min-width: 768px) {
        width: 50%;
    }
    @media screen and (max-width: 767px) {
        width: 80%;
    }
`

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