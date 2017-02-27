import React from "react";

import io from "socket.io-client";
import BlackCard from "./BlackCard.jsx";
import WhiteCards from "./WhiteCards.jsx";
import Answers from "./Answers.jsx";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            blackcard: "",
            whitecards: [],
            answers: []
        };
    }
    render() {
        return (
            <div>
                <BlackCard text={this.state.blackcard}/>
                <WhiteCards whitecards={this.state.whitecards} sendChoiceToServer={this.sendChoiceToServer.bind(this)} />
                <Answers answers={this.state.answers} sendWinnerToServer={this.sendWinnerToServer.bind(this)} />
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

        socket.on('answers', (data) => {
            // $('#answerbody').append("<div class=\"divTableRow\"><div class=\"divTableCell\">")
            // .append(data)
            // .append("</div></div>");
            //console.log(data);
            let answers = data;
            this.setState(Object.assign({}, this.state, {answers}));
        });
    }
    sendChoiceToServer(text) {
        this.state.socket.emit('choice', text);
    }

    sendWinnerToServer(text) {
        this.state.socket.emit('winner', this.state.blackcard.replace(/_/g, text));
    }
}
