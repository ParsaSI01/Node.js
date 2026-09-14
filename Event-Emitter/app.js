const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('Phone Called', function (name = 'Someone') {
    console.log(`${name} Is Calling`);
});

process.on('exit', (code) => {
    console.log('Process exited with event code: ' + code);
});

emitter.emit('Phone Called', 'Jack');
