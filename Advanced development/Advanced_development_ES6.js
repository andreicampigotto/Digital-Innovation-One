/*
 Fetch, Async/Await e EventEmitter.
*/

// faz requisicoes usando promises, por defaut eh um metodo get
fetch('/data.json')
    .then(resposeStream => {
        if(resposeStream.status === 200) {
            return resposeStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
})
.catch(err =>{
    console.log('Erro: ', err)
});

// Async/Await - ES7

const simpleFunc = async () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});
const simpleFunc = async () => {
    const data = await asyncTimer()
    console.log(data);

    const dataJson = await fetch('data.json').then(resStream => 
    resStream.json()    
    );

    return dataJson;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//EventEmitter
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

emitter .on('User logged', data => {
  console.log(data);  
});

users.userLogged({user: 'Andrei Campigotto'});