import React from "react";
import {Button} from "react-bootstrap";

export default class WhiteCard extends React.Component {
    render() {
        return (
            <div className="whiteCard">
                <div style={{display:"block", fontSize:16}}>
                    {this.props.text}

                </div>
                <div style={{
                    position:"absolute", bottom:"1em", left:"5em", margin:"auto", minWidth:"20%", minHeight:"10%", maxWidth:"150px", maxHeight:"40px"
                }}>
                    <Button bsStyle="success" onClick={this.sendChoiceToServer.bind(this)}>Choose</Button>
                </div>
            </div>

        );
    }
    sendChoiceToServer(e) {
        this.props.sendChoiceToServer(this.props.text);
    }
}
