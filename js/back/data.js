const all = require('./data/all');

module.exports = function (req, res) {
    switch (req.url) {
        case '/data/all.csv':
            res.writeHead(200, {'Content-Type': 'text/csv'});
            res.write(all());
            res.end();
    }
};
