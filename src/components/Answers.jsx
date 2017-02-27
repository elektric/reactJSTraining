import React from "react";
//import {Button} from "react-bootstrap";
import Answer from "./Answer.jsx";

export default class Answers extends React.Component {
    render() {
        let answers = this.props.answers.map((ans) => {
            return (<Answer text={ans} sendWinnerToServer={this.props.sendWinnerToServer} key={ans}/>);
        })
        return (
            <div className="divTable">
                <div className="divTableBody">
                    {answers}
                </div>
            </div>
        );

    }
}
