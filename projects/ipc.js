import {fork} from 'child_processes';

export function ipc() {
    console.log("=== 🔮Comunicacion entre procesos ===");
      //1. creando un subproceso de Node
      const child = fork('./projects/child.js');

      //2. Registrando eventos
      child.on('message', (message) => {
        console.log(`🃏_➡_🤶: ${message}`);
      });
      
      //Enviando un mensaje al proceso hijo
      child.send({message: '❄ Merry christmas ❄'});

}
