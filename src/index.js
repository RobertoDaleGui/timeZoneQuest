const { timeZoneService } = require('./services/timeZone')
const { httpResponse } = require('./parsers/httpResponses')

async function main(event) {

    const country = event.queryStringParameters?.country
    try {
        const currentDateTime = timeZoneService(country)
        return httpResponse(200, currentDateTime)
    } catch (error) {
        return httpResponse(400, error)
    }
}

exports.handler = main