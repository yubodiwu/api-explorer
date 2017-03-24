import React, {Component} from "react";
import {connect} from "react-redux";

import DataFieldAction from "DataFieldAction";
import DataFieldResponse from "DataFieldResponse";
import {capitalizeFirstLetter} from "helperFunctions";
var actions = require("actions");

class DataField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
            apiRequestMade: false,
            apiData: {}
        };

        this.handleSendRequest = this.handleSendRequest.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    renderParametersHeader() {
        if (this.state.clicked) {
            return (
                <div className="parameters-title-holder">
                    <h5>Parameters</h5>
                    <div style={{display: "flex"}}>
                        <button className="btn" onClick={this.handleSendRequest}>Send Request</button>
                    </div>
                </div>
            );
        }
    }

    renderResponse() {
        if (this.state.apiRequestMade) {
            return (
                <div>
                    <div className="parameters-title-holder">
                        <h5>Response</h5>
                    </div>
                    <DataFieldResponse apiData={this.state.apiData}/>
                </div>
            );
        }
    }

    renderDataFieldAction() {
        if (this.state.clicked) {
            return <DataFieldAction apiRequestMade={this.state.apiRequestMade} verb={this.props.verb}/>;
        }
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    async handleSendRequest() {
        this.props.dispatch(actions.apiRequest(`/api?url=${this.props.url}`, {method: this.props.verb.toUpperCase()}));

        this.setState({
            apiRequestMade: true,
            apiData: await this.props.api
        });
    }

    render() {
        return (
            <div>
                <div className={this.state.clicked ? `data-field ${this.props.verb.toLowerCase()}` : `data-field ${this.props.verb.toLowerCase()} clicked`} onClick={this.handleClick}>
                    <button className={`btn btn-default btn-${this.props.verb.toLowerCase()}`}>{this.props.verb.toUpperCase()}</button>
                    <h4>/{this.props.verb.toLowerCase()}</h4>
                    <p>Add something new</p>
                </div>
                {this.renderParametersHeader()}
                {this.renderDataFieldAction()}
                {this.renderResponse()}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        body: state.body,
        url: state.url,
        api: state.api
    };
})(DataField);
