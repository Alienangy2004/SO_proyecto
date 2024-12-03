process.on('message', (message) => {
    // Imprimiendo el mensaje recibido
    console.log(`🃏_🎅_↪_🧒: ${JSON.stringify(message)}`);
    
    // Respondiendo al proceso padre
    process.send({message: '💫 And a Happy New Year 💫'});
});
