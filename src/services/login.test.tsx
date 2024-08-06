import { Loginf } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const email = 'lucas@gmail.com'

    it('Deve exibir um alert com boas vindas', async() => {
        await Loginf(email)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda lucas@gmail.com!')

    })

    it('caso o email não seja passado',async () => {
        await Loginf(email)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
    })

    it('Deve exibir um erro caso o email seja inválido', async ()=>{
        await Loginf('emailinvalido@gmail.com')
        expect(mockAlert).toHaveBeenCalledWith('email inválido')
    })
})