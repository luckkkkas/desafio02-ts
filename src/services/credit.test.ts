import { credit } from "./credit";

describe('credit()', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert 
    it('deve exibir uma alert com pegou emprestimo', () =>{
        credit();
        expect(mockAlert).toHaveBeenCalledWith('voce PEgou Um emprestimo ');
    })
})