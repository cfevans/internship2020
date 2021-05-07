const path = require('path');
const express = require('express');
const router = express.Router({mergeParams: true});
module.exports = router;


const lodash = require('lodash');
const axios = require('axios');

const url = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'


 //*Part 1 -> Fetch Data from URL and send JSON back

 //*Part 2 -> Return data from api sorted by Population High to Low

 //*Part 3 -> Add Capital from Sample Data API
        //KEY Value = State
    const state_capitols = require('../sample_data/capitol');

//* Add string field that includes a sentence: In 2018 Wyoming had a population of XXXX and the capitol was XXXX.

router.get('/', async (req,res)=>{

  
  const response = {message: "Good Luck"}
  res.json(response)
})