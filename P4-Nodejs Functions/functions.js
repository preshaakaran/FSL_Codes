const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<h1>Hello Node JS!</h1>');
        res.write('<p>Home page.</p>');
    } else if (url === '/about') {
        res.write('<h1>About Us</h1>');
        res.write('<p>Node.js functions.</p>');
    } else if (url === '/contact') {
        res.write('<h1>Contact Us</h1>');
        res.write('<p>Email us at: test@gmail.com</p>');
    } else {
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>Page does not exist.</p>');
    }

    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
