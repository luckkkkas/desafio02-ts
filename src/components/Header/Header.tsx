import { ChakraProvider,
  Image,
  Spacer,
  Flex,
  Avatar,
  MenuButton,
  MenuList,
  MenuItem
 } from "@chakra-ui/react"

export const Header  = () => {
  return(
    <>
    <ChakraProvider>
        <Flex pl={1.5} backgroundColor='black' w='full' h={75}>
          <Image boxSize={90} mt={0} src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg' alt='Dan Abramov' />
          <Spacer />
           
              <Avatar size={'7xs'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfHP4p65dQ0MnpidZ1GIJM5jqDgLJBLdWRA&s'  />
           
        </Flex>
        
         
      </ChakraProvider>
    </>
  )
}
