const http = require('http');


const app = http.createServer((req, res) => {
    res.end("welcome home");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});