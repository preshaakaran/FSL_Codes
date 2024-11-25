console.log('Start of code');

const asyncFunc = (callback) => {
    console.log('Async task started...');
    setTimeout(() => {
        console.log('Async task completed after 2 seconds.');
        callback();
    }, 2000);
}

asyncFunc(() => {
    console.log('Callback executed after completion of async task.');
});

console.log('End of code');
