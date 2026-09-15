const EmitEvent = require('./index');

const emitter = new EmitEvent();

emitter.on('Phone Ringing', function (name) {
    console.log(name + ' Is Calling');
});

emitter.emitterEvent();
