import React from "react";
import Spider from "./spider";
import data from "./data";

const width = 960;
const height = 2200;
const { Node, Circle, Text, Link, Rect } = Spider.Shape;
const { darken } = Spider.Color;

const nodeCreator = function(data) {
  const nodeWidth = Number(data.width) || 120;
  return (
    <Node width={nodeWidth} height={32} offset={[-nodeWidth / 2, -24]}>
      <Rect
        color={data.color}
        radius={16}
        strokeWidth={2}
        stroke={darken(data.color, 0.2)}
      />
      <Text
        offset={[nodeWidth / 2, 12]}
        color={data.textColor || "white"}
        alignment="middle"
      >
        {data.text}
      </Text>
    </Node>
  );
};

const linkCreator = function(link) {
  const offset = link.offset ? link.offset.split(" ") : [0, 0, 0, 0];
  return (
    <Link
      data={link}
      stroke={link.color || "red"}
      offset={offset}
      text={link.text}
      type="broke"
      strokeRadius={5}
      arrow={true}
    />
  );
};

window.GLOBAL_LINK_STROKE = "#ccc";

export default () => (
  <Spider
    width={width}
    height={height}
    dataSource={data}
    offset={[40, 0]}
    nodeCreator={nodeCreator}
    linkCreator={linkCreator}
  />
);
