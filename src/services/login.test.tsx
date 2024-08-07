import { login } from "./Login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const email = 'lucas@gmail.com'
    const password = '12345678'

    it('Deve logar', async() => {
        const response = await login(email, password)
        expect(mockAlert).toBeTruthy

    })

    it('não deve permitir login',async () => {
        const response = await login("email", 'password')
        expect(mockAlert).toBeFalsy
    })
})