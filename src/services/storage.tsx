interface IDdioBank {
    login: boolean
}

const diobank: IDdioBank = {
    login: false
}

export const getAllLocalStorage = ():string|null => {
    return localStorage.getItem('')
}

export const createLocalStorage = ():void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage= (diobank: IDdioBank): void => {
    localStorage.setItem('diobank' , JSON.stringify(diobank))
}