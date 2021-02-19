const { app } = require('./app.js');
const port = process.env.PORT || 3000

// we will define our port for local development
const port = 3000;

// this is the code to 'launch/spin-up' our server.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);