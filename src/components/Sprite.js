import * as React from "react";
import { View, ImageBackground } from "react-native";
import "./Sprite.sass";

export class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export default class Sprite extends React.Component {
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

  loop = () => {
    const { frame } = this.state;
    const { sequences, sequence } = this.props;
    this.setState({
      frame: (frame + 1) % sequences[sequence].length
    });
  };

  render() {
    const { frame } = this.state;
    const { sequences, cuts, style, src, sequence, x, y } = this.props;
    const sequenceCuts = sequences[sequence].map(e => cuts[e]);
    const currentCut = sequenceCuts[frame];
    return (
      <ImageBackground
        source={`url(${src})`}
        style={{
          ...style,
          left: `${x}px`,
          top: `${y}px`,
          backgroundPosition: `-${currentCut.x}px -${currentCut.y}px`,
          height: `${currentCut.height}px`,
          width: `${currentCut.width}px`
        }}
      >
        <View style={Sprite} />
        );
      </ImageBackground>
    );
  }
}
