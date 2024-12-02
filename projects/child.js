process.on('message', (message) =>{
    //imprimimos mensaje recibido
    console.log(`regalo: ${message}`)
    //contestar mensaje al padre
    process.send({received: true});
});npm