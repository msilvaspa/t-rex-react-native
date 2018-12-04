import * as React from "react";
import { View } from "react-native";
import "./Sprite.sass";

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Sprite extends React.Component {
  state = {
    frame: 0
  };

  constructor(props) {
    super(props);
    if (props.play) this.play();
  }

  play = () => {
    const { fps, play } = this.props;
    if (play) this.loop();
    setTimeout(this.play, 1000 / fps);
  };

  render() {
    const {
      sequences,
      cuts,
      fps,
      style,
      src,
      play,
      sequence,
      x,
      y
    } = this.props;
    const sequenceCuts = sequences[sequence].map(e => cuts[e]);
    return <View style={Sprite} />;
  }
}
