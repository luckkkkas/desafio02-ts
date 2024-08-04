import {deposit} from './deposit'


describe('deposito', ()=> {
    it('Deve retornar um alert com o deposito', () => {
        const mockAlert = jest.fn();
        window.alert = mockAlert;
        deposit()
        expect(mockAlert).toBeCalledWith("voce depositou");
    })
})