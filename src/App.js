import logo from './logo.svg';
import './App.css';
import Game from "./game";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Game></Game>
      </div>
    </ChakraProvider>
  );
}

export default App;
