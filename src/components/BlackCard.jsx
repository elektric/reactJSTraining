import React from "react";
import {Jumbotron} from "react-bootstrap";

export default class BlackCard extends React.Component {
    render() {
        return (
            <Jumbotron>
                <div className="blackCard">
                    <h1>{this.props.text}</h1>
                </div>
            </Jumbotron>
        );
    }
}
