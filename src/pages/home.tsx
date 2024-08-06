import { Layout } from "./layout"
import { MButton } from "../components/Button"
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex,
    Spacer,
    SimpleGrid,
    Stack,
    Heading,
    Text,
    Center,
    Spinner
} from "@chakra-ui/react"
import { credit } from "../services/credit";
import { withdraw } from "../services/withdraw";
import { deposit } from "../services/deposit";
import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

interface UserData {
    name: string,
    email: string,
    password: string,
    balance: number,
    id: string
}


export const Home = () => {
    const {isLoggedIn} = useContext(AppContext)
    const [userData, setUserData] = useState<null | UserData>();
    const { id } = useParams();
    const navigate = useNavigate();


    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
        }

        getData();
    }, [])


    if( userData && id !== userData.id){
        navigate('/');
    }
    return (
        <Layout>
            <SimpleGrid h={'80vh'}>
                <Spacer />
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size={"xl"}/>
                            </Center>
                        ) :
                        (
                            <SimpleGrid alignItems={'Center'} pb={10} justifyContent={'center'}>
                                <Stack>
                                    <Heading size='lg'>Info User</Heading>
                                    <Text>{userData?.name}</Text>
                                    <Text>{userData?.email}</Text>
                                </Stack>
                            </SimpleGrid>
                        )

                }
                <Flex h={""}>
                    <Spacer />
                    <Stat>
                        <StatLabel>Balance</StatLabel>
                        <StatNumber>R$ {userData?.balance}</StatNumber>
                        <StatHelpText >{today.toLocaleDateString()+" "+today.getHours()+":"+today.getMinutes()}</StatHelpText>
                    </Stat>
                    <Spacer />
                    <StatGroup>
                        <Stat>
                            <StatLabel>Received</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                                <StatArrow type='increase' />
                                23.36%
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>45</StatNumber>
                            <StatHelpText>
                                <StatArrow type='decrease' />
                                9.05%
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                    <Spacer />
                </Flex>
                <Spacer />
                <Flex h={10}>
                    <Spacer />
                    <MButton onClick={deposit} label="Deposit" color="blue" />
                    <Spacer />
                    <MButton onClick={withdraw} label="Withdraw" color="red" />
                    <Spacer />
                    <MButton onClick={credit} label="Credit" color="green" />
                    <Spacer />
                </Flex >
                <Spacer />
            </SimpleGrid>
        </Layout>
    )
}