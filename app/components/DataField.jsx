import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";

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
            apiData: {},
            isPostOrPut: this.props.verb === "put" || this.props.verb === "post"
        };

        this.handleSendRequest = this.handleSendRequest.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    renderParametersHeader() {
        if (this.state.clicked) {
            return (
                <div className={`parameters-title-holder ${this.props.verb} ${!this.state.isPostOrPut && !this.state.apiRequestMade ? "bottom-border" : null}`}>
                    {this.props.verb === "post" || this.props.verb ==="put" ? <h5>Parameters</h5> : null}
                    <div className={!this.state.isPostOrPut ? `bottom-border ${this.props.verb}` : this.props.verb}>
                        <button className="btn" onClick={this.handleSendRequest}>Send Request</button>
                    </div>
                </div>
            );
        }
    }

    renderDataFieldAction() {
        if (this.state.clicked && (this.props.verb === "post" || this.props.verb === "put")) {
            return <DataFieldAction apiRequestMade={this.state.apiRequestMade} verb={this.props.verb}/>;
        }
    }

    renderResponse() {
        if (this.state.apiRequestMade) {
            return (
                <div>
                    <div className={`parameters-title-holder ${this.props.verb}`}>
                        <h5>Response</h5>
                    </div>
                    <DataFieldResponse apiData={this.state.apiData} verb={this.props.verb}/>
                </div>
            );
        }
    }

    async handleSendRequest() {
        console.log(this.props.url === "");
        try {
            if (this.props.url === "") throw new Error("no url given");
            switch (this.props.verb) {
                case "get":
                    var httpRequestData = await axios.get(this.props.url);
                    break;
                case "delete":
                    var httpRequestData = await axios.delete(this.props.url);
                    break;
                case "post":
                    var httpRequestData = await axios.post(this.props.url, this.props.body);
                    break;
                case "put":
                    var httpRequestData = await axios.put(this.props.url, this.props.body);
                    break;
                default:
                    break;
            }
        } catch (err) {
            var httpRequestData = this.props.url === "" ? {data: "No url given"} : {data: "Error occurred, invalid url or bad server response."};
        }

        console.log("http", httpRequestData);

        this.setState({
            apiRequestMade: true,
            apiData: JSON.stringify(httpRequestData.data)
        });
    }

    render() {
        return (
            <div>
                <div className={this.state.clicked ? `data-field ${this.props.verb.toLowerCase()}` : `data-field ${this.props.verb.toLowerCase()} clicked`} onClick={this.handleClick}>
                    <button className={`btn btn-default btn-${this.props.verb.toLowerCase()}`}>{this.props.verb.toUpperCase()}</button>
                    <h4>/{this.props.verb.toLowerCase()}</h4>
                    <p>{this.props.verbText}</p>
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
        url: state.url
    };
})(DataField);
