const http = require('http');

const PORT = 3000;

const server = http.createServer();

const infos = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (items[1] === 'info' && req.method == 'POST') {
        req.on('data', (data) => {
            console.log(data.toString());
            const info = data.toString();
            infos.push(JSON.parse(info))
        });
    }

    if (items[1] === 'info' && req.method == 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });

        if (items.length === 2) {
            res.end(JSON.stringify(infos));
        } else if (items.length === 3) {
            const id = Number(items[2]);

            const item = infos.find((item) => item.id === id);

            if (item) {
                res.end(JSON.stringify(item));
            } else {
                res.statusCode = 404;
                res.end();
            }
        }
    } else if (items[1] === 'home' && req.method == 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Nodejs Is Great</li>');
        res.write('<li>We Are Going To Use Express Soon!</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening On PORT ${PORT}.`);
});
