import {fork} from 'child_process';

export function ipc() {
    console.log("=== 🔮 Comunicación entre procesos ===");

    // Creando un subproceso de Node.js
    const child = fork('./projects/child.js');

    // Registrando eventos
    child.on('message', (message) => {
        console.log(`🃏_➡_🤶: ${JSON.stringify(message)}`);
    });

    // Enviando un mensaje al proceso hijo
    child.send({message: '❄ Merry Christmas ❄'});
}
