const EventEmitter = require('events');

const e = new EventEmitter();

// Creating Events
e.on('greet', (name) => {
    console.log(`Hello ${name}, Good Morning.`);
});

e.on('calculate', (num1, num2, op) => {
    let result;
    switch (op) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        default:
            break;
    }
    console.log(`Result is ${result}`);
});

e.on('farewell', (name) => {
    console.log(`Goodbye ${name}, see you soon.`);
});

e.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});

console.log()

// Emitting Events
console.log('Triggering "greet" event');
e.emit('greet', "User");
console.log()

console.log('Triggering "calculate" event');
e.emit('calculate', 5, 10, 'add');
console.log()

console.log('Triggering "calculate" event');
e.emit('calculate', 5, 10, 'mul');
console.log()

console.log('Triggering "farewell" event');
e.emit('farewell', "User");
console.log()

console.log('Triggering "error" event');
e.emit('error', new Error('Some Error occured!'));
console.log()
