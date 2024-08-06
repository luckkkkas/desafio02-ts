
import { withdraw } from "./withdraw"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        withdraw()
        expect(mockAlert).toHaveBeenCalledWith('voce sacou')
    })
})