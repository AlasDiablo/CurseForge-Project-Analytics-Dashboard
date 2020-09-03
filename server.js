const data = require('./js/back/data');
const DataFile = require('./js/back/datafile');
const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);

    if (req.url.startsWith('/data/')) data(req, res);
    else if (req.url === '/dashboard.css') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(
            fs.readFileSync('css/dashboard.css', 'utf8')
        );
        res.end();
    } else if (req.url === '/index.html' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const file = new DataFile();
        res.write(
            require('./js/front/index')(
                JSON.stringify(
                    require('./js/back/vegaIndex')
                ),
                file.getModsList()
            )
        );
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("Not found");
        res.end();
    }


}).listen(8080);
