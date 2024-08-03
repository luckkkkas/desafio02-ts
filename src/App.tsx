import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './pages/login';
import { Home } from './pages/home';

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
