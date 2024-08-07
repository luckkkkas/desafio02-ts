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
import { useContext, useState } from 'react'
import { MButton } from '../components/Button'
import { login } from '../services/Login'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'


export const Login = () => {
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateUser = async (email: string, password: string)  => {
        const loggedIn = await login(email, password);
        if(!loggedIn){
            return null
        }
        setIsLoggedIn(true);
        navigate("home/22");
        changeLocalStorage({login: true});
        return 
    }

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
                <Input variant='flushed' type='password' value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="password" />
            </Stack>
            
                <Flex >
                    <Spacer />
                    <SimpleGrid columns={1} mt={10}>
                        <Link m='auto' href="#"> I forgot my pssword</Link>
                        <Link m='auto'href='#'>Create account</Link>
                    </SimpleGrid>
                    <Spacer />
                    <MButton onClick={()=>validateUser(email, password)} label="Login" color="pink"/>
                    <Spacer />
                </Flex>
            
            </Box>
        </Box>
        </ChakraProvider>
    )
}