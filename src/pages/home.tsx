import { Layout } from "./layout"
import {Button} from "../components/Button"
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex,
    Spacer,
    SimpleGrid
} from "@chakra-ui/react"
import { credit } from "../services/credit";
import { withdraw } from "../services/withdraw";
import { deposit } from "../services/deposit";

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

export const Home = () => {
    return (
        <Layout>
            <SimpleGrid h={'80vh'}>
            <Spacer />
                <Flex h={"full"}>
                    <Spacer/>
                    <Stat>
                        <StatLabel>Balance</StatLabel>
                        <StatNumber>R$ 0.00</StatNumber>
                        <StatHelpText>{today.toDateString()}</StatHelpText>
                    </Stat>
                    <Spacer />
                    <StatGroup>
                        <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                                <StatArrow type='increase' />
                                23.36%
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Clicked</StatLabel>
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
                    <Button onClick={deposit} label="Deposit"/>
                    <Button onClick={withdraw} label="Withdraw"/>
                    <Button onClick={credit} label="Credit"/>
                </Flex >
                <Spacer />
            </SimpleGrid>
        </Layout>
    )
}