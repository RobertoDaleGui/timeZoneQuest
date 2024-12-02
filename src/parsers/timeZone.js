const timeZones = [
  {
    country: "BRAZIL",
    timeZone: "America/Sao_Paulo"
  },
  {
    country: "USA",
    timeZone: "America/New_York",
  },
  {
    country: "INDIA",
    timeZone: "Asia/Kolkata",
  },
  {
    country: "JAPAN",
    timeZone: "Asia/Tokyo",
  },
]

function timeZoneParser(data) {
  if (!data)
    throw 'Querystring "country" not provided'

  const response = timeZones.find(timeZone => timeZone.country == data.toUpperCase())

  if (!response)
    throw `Unmapped country, allowed countries: ${timeZones.map(timeZone => timeZone.country)}`

  return response.timeZone
}

module.exports = { timeZoneParser }