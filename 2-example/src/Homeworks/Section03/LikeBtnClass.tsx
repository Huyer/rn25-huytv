import React, { Component } from "react";
import { AiOutlineLike } from "react-icons/ai";

type Props = {};

type State = {};

class LikeBtnClass extends Component<Props, State> {
  state = { isLike: false };

  render() {
    return (
      <div>
        <AiOutlineLike
          style={{ fontSize: 50 }}
          onClick={() => this.setState({ isLike: !this.state.isLike })}
        />
        <span style={{ fontSize: 50 }}>
          {this.state.isLike === false ? "0" : "1"}
        </span>
      </div>
    );
  }
}

export default LikeBtnClass;
