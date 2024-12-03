/*investigar para que sirve
spwan
exec
fork
*/
import{spawn, exec, fork } from 'child_processes';


export function childprocesses() {
    console.log("=== 👶creacion de proceoso hijo👦 ===");
    console.log("📢creando un child process");
    const childprocesses = spawn('ls',['-l']);
    
    // manejando en mi child process
    childprocesses.stdout.on('data', (data) => {
        console.log(`✍ouput: ${data}`);
    });

    //manejando errores
    childprocesses.stderr.on('data', (data) => {
        console.log(`🚫 output: ${data}`)
    });

    //evento close
    childprocesses.on('close', (code) => {
        console.log(`▶ Proceso terminado con el codigo:  ${code}`)
    });
}
