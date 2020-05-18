const express = require('express');
const userRoutes = require('./routes')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/items', userRoutes);
app.use((req, res, next) => {
    console.log('Middleware just ran');
    next();
})

app.get('/', (req, res) => {
    console.log('Middleware just ran on user route')
    res.send('Start with users')
})

app.listen(3000, () => {
    console.log('The server has started')
});
