const express = require('express');

const PORT = process.env.CERTBOT_PORT || 4321;

const app = express();

app.use((req, res, next) => {
	console.log(req.headers);
	next();
});

app.use('/', express.static('./challenges'));

app.listen(PORT, () => {
	console.log('CERTBOT started listening');
});
