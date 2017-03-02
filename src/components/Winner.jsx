import React from "react";
//import {Jumbotron} from "react-bootstrap";

export default class Winner extends React.Component {
    render() {
        return (

                <div className="winner">

                    <h1>Winner of last round: {this.props.text}</h1>
                </div>

        );
    }
}
