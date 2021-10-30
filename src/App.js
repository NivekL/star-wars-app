import styled from 'styled-components';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <MainContainer className="App">
      <Title>Star Wars Character Index</Title>
      <CharacterList />
    </MainContainer>
  );
}

export default App;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 1px;
`

const MainContainer = styled.div`
  background-image: url('/images/background.jpg');
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
`