import React from "react";
import {Button} from "react-bootstrap";

export default class Answer extends React.Component {
    render() {
        return (
            <div className="divTableRow">
                <div className="divTableCell">
                    {this.props.text}
                    <div className="divTableCell">
                        <Button bsStyle="success" onClick={this.sendWinnerToServer.bind(this)}>Choose Winner</Button>
                    </div>
                </div>
            </div>
        );
    }
    sendWinnerToServer(e) {
        this.props.sendWinnerToServer(this.props.text);
    }
}
