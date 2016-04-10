'use strict';
var mecab = require('mecab-ya');

exports.nouns = (event, context, callback) => {
    if (!event.text) {
        return callback('Need text');
    }

    mecab.nouns(event.text, (err, result) => {
        return callback(err, result);
    });
};
