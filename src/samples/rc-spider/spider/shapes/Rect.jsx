import Shape from "./Shape";
import ReactART from "react-art";
import React from "react";
import Rectangle from "react-art/Rectangle";
const Group = ReactART.Group;
const Transform = ReactART.Transform;

class Rect extends Shape {
  render() {
    const {
      offset,
      transform,
      width,
      height,
      color,
      radius,
      stroke,
      strokeWidth
    } = this.props;
    const rectTransform = transform || new Transform();
    rectTransform.translate(offset[0], offset[1]);
    return (
      <Group>
        <Rectangle
          transform={rectTransform}
          radius={radius}
          width={width}
          height={height}
          stroke={stroke}
          fill={color}
          strokeWidth={strokeWidth}
        />
        {this.props.children}
      </Group>
    );
  }
}

React.defaultProps = {
  radius: 0
};

export default Rect;
