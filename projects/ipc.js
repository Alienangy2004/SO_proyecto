import {fork} from 'child_process'
export function ipc(){
    console.log("Comunicaciones entre procesos")
    //creando un subproceso de node
    const child = fork('child.js');
    //registrar eventos
    child.on('mesages', (message) =>{
        console.log(`hola: $(message)`);
    });
    //enviando un mensaje al proceso hijo
    child.send({message: 'merry christmas'})
}