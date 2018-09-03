// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options, function (response) {

    let str = '';

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    response.on('data', function (data) {
        str += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
        callback(str);
    });
    });
};