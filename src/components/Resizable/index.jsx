import React from "react";
import { Resizable as Resize } from "re-resizable";

const style = {
  height: "100%",
  width: "100%",
  background: "white",
};
const enable = {
  top: false,
  right: false,
  bottom: false,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

const Resizable = ({ pos, children, width, height }) => {
  enable[pos] = true;
  return (
    <Resize
      defaultSize={{ width: width, height: height }}
      style={style}
      enable={enable}
    >
      {children}
    </Resize>
  );
};

export default Resizable;
