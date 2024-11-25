console.log('Start of code');

setTimeout(() => {
    console.log('Timeout callback');
}, 0);

setImmediate(() => {
    console.log('Immediate callback');
});

Promise.resolve().then(() => {
    console.log('Promise callback');
});

console.log('End of code');
