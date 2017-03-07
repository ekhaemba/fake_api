var jsf = require('json-schema-faker')
var schema = {
  "id": "User",
  "type": "object",
  "properties": {
    "username": {
      "type":"string",
      "faker":"internet.userName"
    },
    "full_name":{
      "type":"string",
      "faker":"name.findName"
    },
    "calendar":{
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
                "faker":"internet.userName"
              }
            }
          },
          "required":["eventId","eventName","startTime","endTime"]
        }
    }
  },
  "required": ["username","full_name","calendar"]
}

export default function getUser_Calendar(){
  return jsf(schema)
}
