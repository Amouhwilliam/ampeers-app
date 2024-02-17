module.exports = {
  100: {
    "id": 100,
    "label": "12000090",
    "plantId": 22,
    "customer": {
      "id": 484,
      "person": {
        "id": 1320,
        "nameFirst": "Maria",
        "nameLast": "Muster",
        "contactPhone": "04213798535",
        "contactMobile": "01638789199",
        "contactEmail": "1@4.de"
      },
      "address": {
        "id": 1320,
        "streetName": "Pastor-Diehl-Straße",
        "streetNumber": "4a",
        "zipCode": "28717",
        "city": "Bremen",
        "country": "DE"
      },
      "plantId": 22,
      "isOperator": false,
      "label": "C007483"
    },
    "startDate": "2019-06-01T00:00:00.000Z",
    "endDate": "9999-12-31T00:00:00.000Z",
    "contractMeter": {
      "id": 900,
      "contractComponents": [{
        "id": 1200,
        "startDate": "2020-05-01T00:00:00.000Z",
        "endDate": "9999-12-31T00:00:00.000Z",
        "tariff": {
          "id": 33,
          "nameInternal": "59678_MS",
          "nameExternal": "TRF Mieterstrom",
          "tax": true,
          "powerTax": true,
          "validityStartDate": "2018-02-01T00:00:00.000Z",
          "validityEndDate": "9999-12-31T00:00:00.000Z",
          "priceSheets": [{
            "id": 61,
            "name": "59678_MS1",
            "basicPrice": 7.21,
            "energyPrice": 18.490000000000002,
            "startDate": "2018-02-01T00:00:00.000Z",
            "endDate": "2019-02-01T00:00:00.000Z"
          }, {
            "id": 62,
            "name": "59678_MS2",
            "basicPrice": 7.21,
            "energyPrice": 20.150000000000002,
            "startDate": "2019-02-01T00:00:00.000Z",
            "endDate": "9999-12-31T00:00:00Z"
          }]
        },
        "electricityGenerationOrGasType": null
      }, {
        "id": 484,
        "startDate": "2019-06-01T00:00:00.000Z",
        "endDate": "2020-05-01T00:00:00.000Z",
        "tariff": {
          "id": 33,
          "nameInternal": "59678_MS",
          "nameExternal": "TRF Mieterstrom",
          "tax": true,
          "powerTax": true,
          "validityStartDate": "2018-02-01T00:00:00.000Z",
          "validityEndDate": "9999-12-31T00:00:00.000Z",
          "priceSheets": [{
            "id": 61,
            "name": "59678_MS1",
            "basicPrice": 7.21,
            "energyPrice": 18.490000000000002,
            "startDate": "2018-02-01T00:00:00.000Z",
            "endDate": "2019-02-01T00:00:00.000Z"
          }, {
            "id": 62,
            "name": "59678_MS2",
            "basicPrice": 7.21,
            "energyPrice": 20.150000000000002,
            "startDate": "2019-02-01T00:00:00.000Z",
            "endDate": "9999-12-31T00:00:00Z"
          }]
        }
      }]
    }
  }
}