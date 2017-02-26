import React from "react";
import io from "socket.io-client";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={socket:null, blackcard:null, whitecards:[]};
  }
  render() {
   return (<h1>Hello, {this.props.name} </h1>);
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
}
