const BreakException = {};

module.exports = class DataFile {
    constructor() {
        this._dataList = require('../../data/data').data_list;
    }

    getContent(uri) {
        let file = null;
        try {
            this._dataList.forEach(e => {
                const content = require('../../data/content/' + e);
                if (content.uri === uri) {
                    file = content;
                    throw BreakException;
                }
            });
        } catch (e) {
            if (e !== BreakException) throw e;
            else return file;
        }
    }

    getData() {
        return this._dataList;
    }

    getModsList() {
        const out = [];

        this._dataList.forEach(e => {
            const ele = this.getContent(e);
            out.push(
                {
                    name: ele.name,
                    url: ele.uri
                }
            )
        });
        return out;
    }
};
