function httpResponse(statusCode, message) {
    return {
        200: {
            statusCode: 200,
            body: JSON.stringify({
                message: "Data e hora atual",
                dateTime: message
            }),
        },
        400: {
            statusCode: 400,
            body: message
        }
    }[statusCode]
}

module.exports = { httpResponse }