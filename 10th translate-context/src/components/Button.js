import React from "react";
import LanguageContext from "../contexts/LangaugeContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderButton(color) {
    return (
      <button className={`ui ${color} button`}>
        <LanguageContext.Consumer>
          {({language}) => `${language}` === "english" ? "Submit" : "Voorleggen"}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
