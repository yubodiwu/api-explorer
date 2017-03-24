import React, {Component} from "react";
import {connect} from "react-redux";

var actions = require("actions");

class DataFieldAction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.apiRequestMade ? `data-field-action ${this.props.verb} api-request-made` : `data-field-action ${this.props.verb}`}>
                <input type="text" ref="body" onChange={(props) => {
                    this.props.dispatch(actions.changeBody(this.refs.body.value));
                }}/>
            </div>
        );
    }
}

export default connect()(DataFieldAction);
