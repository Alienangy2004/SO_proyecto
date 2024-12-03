import {childprocesses} from './projects/child_processes.js';
import {ipc} from './projects/ipc.js';
import {ProcessesState} from './projects/processes_state.js';

console.log("🌟 Programa de procesos 🌟");
let option = process.argv[2];
switch (option) {
    case "1":
        childprocesses();
        break;
    case "2":
        ipc();
        break;
    case "3":
        ProcessesState();
        break;
    default:
        console.log("😢 Opción inválida");
        break;
}
