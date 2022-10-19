function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return; //encerra a função
            }

            resolve(msg.toUpperCase() +  ' - Passei na Promise')
            return;
        })

    })
}

function baixaPagina () {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi(001110, 300)
    }
}
baixaPagina()
    .then(console.log)
    .catch(e => console.log(`Error: ${e}`))