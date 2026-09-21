const express = require('express');

const app = express();

const PORT = 3000;

const users = [
    {
        id: 0,
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
        id: 2,
        firstName: 'Jack',
        lastName: 'Doe',
    },
    {
        id: 3,
        firstName: 'Jim',
        lastName: 'Doe',
    },
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`Method: ${req.method} - URL: ${req.url} Delta: ${delta}ms`);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This Is The Home Page');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'User Was Not Found',
        });
    }

    let newUser = {
        name: req.body.name,
        id: users.length,
    };
    users.push(newUser);

    res.json(newUser);
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = users[userId];

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            error: 'User Does Not Exist',
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listening From PORT ${PORT}`);
});
