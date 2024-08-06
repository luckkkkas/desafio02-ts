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
import { useEffect, useState } from 'react'
import { MButton } from '../components/Button'
import { Loginf } from '../services/login'


export const Login = () => {
    const [email, setEmail] = useState('');

    return(
        <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            {/* { userData === undefined ? <h1>loading...</h1>: <h2>Infos Carregadas</h2>} */}
            <Box maxW={500} m='auto' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
                <h1>Welcome </h1>
            </Center>
            <Stack spacing={3} >
                <Input variant='flushed' value={email} onChange={(event)=>{setEmail(event.target.value)}} type='email' placeholder="email" />
                <Input variant='flushed' type='password' placeholder="password" />
            </Stack>
            
                <Flex >
                    <Spacer />
                    <SimpleGrid columns={1} mt={10}>
                        <Link m='auto' href="#"> I forgot my pssword</Link>
                        <Link m='auto'href='#'>Create account</Link>
                    </SimpleGrid>
                    <Spacer />
                    <MButton onClick={()=> Loginf(email)} label="Login" color="pink"/>
                    <Spacer />
                </Flex>
            
            </Box>
        </Box>
        </ChakraProvider>
    )
}