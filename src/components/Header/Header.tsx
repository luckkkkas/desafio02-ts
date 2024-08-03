import { ChakraProvider,
  Box,
  Image
 } from "@chakra-ui/react"

export const Header  = () => {
  return(
    <>
    <ChakraProvider>
        <Box pl={1.5} backgroundColor='black' w='full' h={75}>
          <Image boxSize={90} mt={0} src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg' alt='Dan Abramov' />
        </Box>
      </ChakraProvider>
    </>
  )
}
