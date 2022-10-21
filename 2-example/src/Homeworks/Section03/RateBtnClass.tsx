import React, { Component } from "react";
import { AiTwotoneStar } from "react-icons/ai";

type Props = {};

type State = {};

class RateBtnClass extends Component<Props, State> {
  state = { index: 0 };

  render() {
    const stars = Array(5).fill(0);
    return (
      <div>
        {stars.map((_, i) => {
          return (
            <AiTwotoneStar
              key={i}
              size={24}
              style={{ marginRight: 10, cursor: "pointer" }}
              color={this.state.index <= i ? "gray" : "orange"}
              onClick={() => this.setState({ index: i + 1 })}
            />
          );
        })}
      </div>
    );
  }
}

export default RateBtnClass;
