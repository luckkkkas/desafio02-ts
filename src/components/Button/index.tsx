import { IButton } from "./types"
import { Button, color } from '@chakra-ui/react'

export const MButton  = ({label, onClick, color }: IButton ):any => {
    return(
        
        <Button onClick={onClick} variant={"outline"} colorScheme={color}>
            {label}
        </Button>
    )
}