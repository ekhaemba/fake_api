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
    }
  },
  "required": ["username","full_name"]
}

export default function getUser(){
  return jsf(schema)
}
