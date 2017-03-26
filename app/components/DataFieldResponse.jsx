import React, {Component} from "react";
import {connect} from "react-redux";

var DataFieldResponse = (props) => {
    return (
        <div className={`data-field-action ${props.verb}`}>
            {props.apiData}
        </div>
    );
}

export default connect((state) => {
    return {
        url: state.url,
        api: state.api
    };
})(DataFieldResponse);
