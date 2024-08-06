import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/home';
import { Login } from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';


function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home/:id' element={<Home/>} />
        </Routes>
        </ChakraProvider>  
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;