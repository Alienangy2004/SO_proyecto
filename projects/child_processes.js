//investigar para que sirve
//pawn, exec, fork
import { spawn, exec, fork }
export function childproccesses(){
    console.log("--- Creacion de procesos hijo ---");
    console.log("Creando un child_process");
    const childProcess = spawn('ls',['-l']);
//manejando eventos en mi child
childProcess.stdout.on('data', () => {
    console.log(`Output: ${data}`)
});
//manejando errores
childProcess.stderr.on('data', (data) =>{
    console.log(`Output: ${data}]`)
    });
    //evento close
    childProcess.on('close', (code) =>{
    console.log(`Proceao terminado con el codigo: ${code}]`)
    });
}