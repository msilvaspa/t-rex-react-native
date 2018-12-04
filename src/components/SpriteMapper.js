import * as React from "react";
import { View } from "react-native";
import "./SpriteMapper.sass";

const SpriteMapper = prop => {
  const { sequences, cuts, src, fps, style } = props;

  <View style={SpriteMapper}>
    {React.Children.map(props.children, child => {
      if (!child) return null;
      return React.cloneElement(child, {
        sequences,
        cuts,
        src,
        fps: child.props || fps,
        style
      });
    })}
  </View>;
};
export default SpriteMapper;
