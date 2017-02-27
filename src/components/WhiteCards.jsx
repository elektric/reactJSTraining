import React from "react";
import WhiteCard from "./WhiteCard.jsx";


export default class WhiteCards extends React.Component {
    render() {
      let whitecards = this.props.whitecards.map((wc) => {
              return (<WhiteCard text={wc} sendChoiceToServer={this.props.sendChoiceToServer} key={wc}/>);
          })
        return (
            <div>
                {whitecards}
            </div>
        );
    }

}
