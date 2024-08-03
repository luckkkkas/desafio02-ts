import { 
    Center,
    ChakraProvider,
    Input,
    Box,
    Stack,
    Flex,
    Spacer,
    Link,
    SimpleGrid
  } from '@chakra-ui/react'

import { Button } from '../components/Button'
import { login } from '../services/login'

export const Login = () => {
    return(
        <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Box maxW={500} m='auto' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
                <h1>Welcome </h1>
            </Center>
            <Stack spacing={3} >
                <Input variant='flushed' type='email' placeholder="email" />
                <Input variant='flushed' type='password' placeholder="password" />
            </Stack>
            
                <Flex >
                    <Spacer />
                    <SimpleGrid columns={1} mt={10}>
                        <Link m='auto' href="#"> I forgot my pssword</Link>
                        <Link m='auto'href='#'>Create account</Link>
                    </SimpleGrid>
                    <Spacer />
                    <Button onClick={login} label="Login"/>
                    <Spacer />
                </Flex>
            
            </Box>
        </Box>
        </ChakraProvider>
    )
}