const { timeZoneParser } = require('../parsers/timeZone')


function timeZoneService(data) {
    const timeZone = timeZoneParser(data)
    const date = new Date();

    return formattedDate = new Intl.DateTimeFormat("en-US", {
        timeZone,
        dateStyle: "full",
        timeStyle: "long",
    }).format(date);
}

module.exports = { timeZoneService }