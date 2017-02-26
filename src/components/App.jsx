import React from "react";

import io from "socket.io-client";
import BlackCard from "./BlackCard.jsx";
import WhiteCard from "./WhiteCard.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            blackcard: null,
            whitecards: []
        };
    }
    render() {
        let whitecards = this.state.whitecards.map((wc) => {
            return (<WhiteCard text={wc} sendChoiceToServer={this.sendChoiceToServer.bind(this)} key={wc}/>);
        })
        return (
            <div>
                <BlackCard text={this.state.blackcard}/> {whitecards}

            </div>
        );
    }
    componentDidMount() {
        console.log("mounted");
        let socket = io.connect('http://' + window.location.hostname + ':4201');
        this.setState(Object.assign({}, this.state, {socket}));
        socket.on('connect', (data) => {
            socket.emit('join', 'Hello World from client');
        });

        socket.on('blackcard', (data) => {
            // $('#questionbody').append("<div class=\"divTableRow\"><div class=\"divTableCell\">")
            //     .append(data)
            //     .append("</div></div>");
            let blackcard = data;
            this.setState(Object.assign({}, this.state, {blackcard}));
        });

        socket.on('whitecards', (data) => {
            // $('#answerbody').append("<div class=\"divTableRow\"><div class=\"divTableCell\">")
            // .append(data)
            // .append("</div></div>");
            //console.log(data);
            let whitecards = data;
            this.setState(Object.assign({}, this.state, {whitecards}));
        });
    }
    sendChoiceToServer(text) {
        this.state.socket.emit('choice', text);
    }
}
