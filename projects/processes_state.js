export function processesState(){
//obteniendo informacion del proceso actual
console.log(`id del proceso: ${process.pid`});
console.log(`memory usage: ${process.memoryUsage()}`);
console.log(`CPU: ${process.cpuUsage()}`);
}