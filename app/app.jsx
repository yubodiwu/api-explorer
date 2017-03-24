import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";

import Main from "Main";

var actions = require("actions");
var store = require("configureStore").configure();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById('app')
);
