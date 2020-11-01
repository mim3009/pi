const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/light', (req, res) => {
	console.log('Light');
	res.send('Light');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
