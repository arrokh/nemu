const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const cors = require('cors')
const forceHttps = require('express-force-https');

const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(forceHttps);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`NEMU is live. Server started on port ${port}`));
