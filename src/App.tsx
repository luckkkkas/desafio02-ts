import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Login } from './pages/login';

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
