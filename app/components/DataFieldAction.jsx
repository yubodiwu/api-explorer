import React, {Component} from "react";
import {connect} from "react-redux";

var actions = require("actions");

class DataFieldAction extends Component {
    constructor(props) {
        super(props);
    }

    renderParameters() {
        var parameters = [];
        var key = 0;

        for (let parameterName in this.props.body) {
            parameters.push(
                <p key={++key}>{parameterName}: {this.props.body[parameterName]}</p>
            );
        }

        return parameters;
    }

    renderBodyForm() {
        if (this.props.verb === "post" || this.props.verb === "put") {
            return (
                <div style={{display: "flex"}}>
                    <div>
                        <form action="" style={{display: "flex"}}>
                            <input type="text" ref="parameterName" placeholder="parameter name"/>
                            <input type="text" ref="parameterValue" placeholder="parameter value"/>
                        </form>
                        <button className={`btn btn-default btn-${this.props.verb}`} onClick={() => {
                            this.props.dispatch(actions.changeBody({
                                parameterName: this.refs.parameterName.value,
                                parameterValue: this.refs.parameterValue.value
                            }))
                        }}>Add Parameter and Value</button>
                    </div>
                    <div className="data-field-parameters-holder">
                        <h4>Parameters and Values:</h4>
                        {this.renderParameters()}
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={this.props.apiRequestMade ? `data-field-action ${this.props.verb} api-request-made` : `data-field-action ${this.props.verb}`}>
                {this.renderBodyForm()}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        body: state.body
    };
})(DataFieldAction);
