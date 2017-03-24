import React, {Component} from "react";
import DataField from "DataField";
import {connect} from "react-redux";

var actions = require("actions");

class DataFieldList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <p>This is a simple API Explorer. You can click on any of the fields and explore the API routes that are relevant to that data field.</p>
                    <div style={{display: "flex", marginBottom: "1rem"}}>
                        <p>API Route to Hit: </p>
                        <input style={{marginLeft: "1rem"}} ref="url" type="text" onChange={() => {
                            this.props.dispatch(actions.changeUrl(this.refs.url.value));
                        }}/>
                    </div>
                    <DataField verb="post"/>
                    <DataField verb="get"/>
                </div>
            </div>
        );
    }
}

export default connect()(DataFieldList);
