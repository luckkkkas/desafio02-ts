import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { createLocalStorage, getAllLocalStorage } from './services/storage';
import { MainRoutes } from './services/routes';


function App() {
  if(!getAllLocalStorage){
    createLocalStorage();
  }
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <MainRoutes />
        </ChakraProvider>  
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;