/*investigar para que sirve
spwan
exec
fork
*/
import {spawn} from 'child_process';

export function childprocesses() {
    console.log("=== 👶 Creación de proceso hijo 👦 ===");
    console.log("📢 Creando un child process");

    const childprocess = spawn('ls', ['-l']); // Cambia 'ls' por 'dir' en Windows si es necesario.

    // Manejando la salida del proceso hijo
    childprocess.stdout.on('data', (data) => {
        console.log(`✍ Output: ${data}`);
    });

    // Manejando errores
    childprocess.stderr.on('data', (data) => {
        console.error(`🚫 Error: ${data}`);
    });

    // Evento de cierre
    childprocess.on('close', (code) => {
        console.log(`▶ Proceso terminado con el código: ${code}`);
    });
}
