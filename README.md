# Q'ed Up
## What is Q'ed Up?
A priority queueing web application made by UW students in CSE 403 with the ambition to make office hours more systematic & straightforward.
#### Goals of this project:
- Have a working priority queue that supports necessary queue functionality
  - for example: enqueue, dequeue, change priority, etc.
- Support login authentication through UW NetID
- Differentiate between students and faculty in order to show the corresponding UI & give correct permissions
  - for example: UI for faculty will have functionality to see the queue, manually edit the queue & broadcast messages to everyone on the queue. Student UI will not be able to see the queue but see a time estimation.

## Notes for Devs
### To run the backend & frontend in brower:
##### backend
- in root directory
- (first time) run `npm install`
- run `npm start`
##### frontend
- in `client` directory
- (first time) run `npm install`
- run `npm start`
---
### To use Postgres database (spoiler - we're using docker):
1. spin up docker (download if necessary) https://www.docker.com/products/docker-desktop/ 

Execute the following commands in your local terminal:

2. (first time) run `docker pull postgres` to pull the latest Postgres version from Docker Hub. 

3. `docker run --name cse403 -e POSTGRES_PASSWORD=password -e POSTGRES_DB=postgres_db -p 5433:5432 -d postgres`


To test if it works:
1. Uncomment lines 18-28 in server/configs/pgConfigs.js
2. Run `node server/configs/pgConfigs.js`
Your terminal should log something like:
``` Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [ { verification: 2 } ],
  fields: [
    Field {
      name: 'verification',
      tableID: 0,
      columnID: 0,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
  _parsers: [ [Function: parseInteger] ],
  _types: TypeOverrides {
    _types: {
      getTypeParser: [Function: getTypeParser],
      setTypeParser: [Function: setTypeParser],
      arrayParser: [Object],
      builtins: [Object]
    },
    text: {},
    binary: {}
  },
  RowCtor: null,
  rowAsArray: false
}
```