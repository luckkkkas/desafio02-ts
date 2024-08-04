import { Flex, Spacer, Link, SimpleGrid } from "@chakra-ui/react"

export const Footer  = () => {
  return(
    <Flex p={3} bgColor={"black"} color={"white"}>
      <SimpleGrid >
        <Link>emailficticio@email.com</Link>
        <Link>fone: (99) 99999-0000</Link>  
        <Link>rua projetada C</Link>
      </SimpleGrid>
      <Spacer />
      <SimpleGrid>
        <Link>sobre o banco</Link>
        <Link>segurança</Link>
        <Link>políticas</Link>
      </SimpleGrid>
      <Spacer />
      <SimpleGrid>
        <Link>fazer depósito</Link>
        <Link>realizar saque</Link>
        <Link>indicação premiada</Link>
      </SimpleGrid>
    </Flex>
  )
}
