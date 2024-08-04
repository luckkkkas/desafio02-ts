import { ChakraProvider,
  Image,
  Spacer,
  Flex,
  Avatar,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Heading
 } from "@chakra-ui/react"
 import { ChevronDownIcon } from "@chakra-ui/icons"

export const Header  = () => {
  return(
    <>
    <ChakraProvider>
        <Flex pl={1.5} backgroundColor='black' w='full' h={75}>
          <Image boxSize={90} mt={0} src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg' alt='Dan Abramov' />
          <Spacer />
          <Heading as={'h1'} color={'whatsapp.100'} m={'auto'}>DIO Banking</Heading>
          <Spacer />
           <Menu>
              <MenuButton m={'auto'} mr={10} boxSize={10} as={Avatar} rightIcon={<ChevronDownIcon />}>
                  <MenuList>
                    <MenuItem>Account</MenuItem>
                    <MenuItem>Change user</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Exit</MenuItem>
                  </MenuList>
              </MenuButton>
            </Menu>
        </Flex>
        
         
      </ChakraProvider>
    </>
  )
}
