const DataFile = require('../datafile');
const parse = require('csv-parse/lib/sync');
const fs = require('fs');

module.exports = function () {
    const file = new DataFile();
    const results = [];

    file.getData().forEach(e => {
        const contents = fs.readFileSync('data/content/' + file.getContent(e).csv, 'utf8');
        const result = parse(contents, {
            columns: true,
            skip_empty_lines: true
        });
        result.forEach(e => {
            results.push({
                name: e['Name'],
                download: e['Daily Unique Download'],
                date: e['Date']
            })
        })
    });

    let resultsCSV = 'name,date,download\n';
    results.forEach(e => resultsCSV += e.name + ',' + e.date + ',' + e.download + '\n');
    return resultsCSV;
};
