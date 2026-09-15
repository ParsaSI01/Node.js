const EventEmitter = require('events');

class EmitEvent extends EventEmitter {
    emitterEvent() {
        this.emit('Phone Ringing', "Jack");
    }
}

module.exports = EmitEvent;
