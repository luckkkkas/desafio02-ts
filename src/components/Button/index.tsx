import { IButton } from "./types"
import { ButtonContainer } from "./style"

export const Button  = ({label, onClick }: IButton ):any => {
    return(
        <ButtonContainer>
            <button onClick={onClick}>{label}</button>
        </ButtonContainer>
    )
}