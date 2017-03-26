import React, {Component} from "react";
import {connect} from "react-redux";

var actions = require("actions");

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div id="nav-container" className="container-fluid">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">API Explorer</a>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    {/* <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <input type="text" ref="url" className="form-control" placeholder="API route" onChange={() => {
                                // this.props.dispatch(actions.changeUrl(this.refs.url.value))
                            }}/>
                            <li>
                                <button className="btn btn-default">Authorize</button>
                            </li>
                            <li>
                                <button className="btn btn-default">Explore</button>
                            </li>
                            <li></li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        );
    }
}

export default connect()(Nav);
