const jsdom = require('jsdom');
const sayHello = require('say-hello'); // local package

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: sayHello()
        })
    }

    return response;
}