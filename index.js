'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const kind_of = require('kind-of')
require('dotenv').config()

const CallSendAPI = require('./src/CallSendAPI') ({
    request
})

const CallSearchAPI = require('./src/CallSearchAPI') ({
    request
})

const SendApiHelper = require("./src/SendApiHelper") ({
    CallSendAPI
})

const GraphApiController = require("./src/GraphApiController") ({
    CallSearchAPI
})

const MessageController = require("./src/MessageController") ({
    SendApiHelper,
    GraphApiController
})

const serve = require('./serve').bind(null, {
    process,
    express,
    MessageController,
    bodyParser,
  })
  
  serve()