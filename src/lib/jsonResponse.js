exports.jsonResponse = function(statusCode, body) {
    return{
        statusCode: statusCode,
        body
    }
}