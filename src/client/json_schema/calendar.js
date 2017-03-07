var jsf = require('json-schema-faker')
var schema = {
      "type":"array",
      "items":{
          "type":"object",
          "properties":{
            "eventId":{
              "type":"string",
              "faker":"random.uuid"
            },
            "eventName":{
              "type":"string",
              "faker":"company.bs"
            },
            "description":{
              "type":"string",
              "faker":"company.bsAdjective"
            },
            "startTime":{
              "type":"string",
              "faker":"date.recent"
            },
            "endTime":{
              "type":"string",
              "faker":"date.future"
            },
            "participants":{
              "type":"array",
              "items":{
                "type":"string",
                "faker":"internet.userName"
              }
            },
            "organizers":{
              "type":"array",
              "items":{
                "type":"string",
                "faker":"internet.userName"
              }
            },
            "interests":{
              "type":"array",
              "items":{
                "type":"string",
                "faker":"hacker.abbreviation"
              }
            }
          },
          "required":["eventId","eventName","startTime","endTime"]
      }
    }

export default function getCalendar(){
  return jsf(schema)
}
