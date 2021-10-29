import styled from 'styled-components';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <MainContainer className="App">
      <CharacterList />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  background-image: url('/images/background.jpg');
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
`