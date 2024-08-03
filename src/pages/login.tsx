import { 
    Center,
    ChakraProvider,
    Input,
    Box
  } from '@chakra-ui/react'

import { Button } from '../components/Button'
import { login } from '../services/login'

export const Login = () => {
    return(
        <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input type='email' placeholder="email" />
            <Input type='password' placeholder="password" />
            <Center>
               <a href="#"> I forgot my password</a>
               <Button onClick={login} label="Login"/>
            </Center>
            </Box>
        </Box>
        </ChakraProvider>
    )
}