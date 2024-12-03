import {exec} from 'child_process';

export function ProcessesState() {
    console.log("=== 🩺 Estados de procesos 🩺 ===");

    // Información del proceso actual
    console.log(`📢 ID del proceso: ${process.pid}`);
    console.log(`📢 Uso de memoria: ${JSON.stringify(process.memoryUsage(), null, 2)}`);
    console.log(`📢 Tiempo de CPU: ${JSON.stringify(process.cpuUsage(), null, 2)}`);

    // Evento del proceso
    process.on('exit', (code) => {
        console.log(`▶ Proceso finalizado con el código: ${code}`);
    });
}
