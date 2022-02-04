
const express = require('express');
  
/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();
const Pool = require('pg').Pool;
  
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gfgbackend',
    password: 'postgres',
    dialect: 'postgres',
    port: 5439
});
  