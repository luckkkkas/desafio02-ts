const conta = {
    email: 'lucas@email.com',
    password: '12345678',
    name: 'Lucas Henrique Bonamigo Oliveira',
    balance: 199.56,
    id:'22'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
} )