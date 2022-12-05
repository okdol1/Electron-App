import React from "react";
import { Resizable as Resize } from "re-resizable";

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

const Resizable = ({
  position,
  children,
  width,
  height,
  minWidth,
  minHeight,
  border,
}) => {
  enable[position] = true;

  const style = {
    height: "100%",
    width: "100%",
    background: "white",
  };

  if (border) {
    switch (border) {
      case "top":
        style.borderTop = "1px solid #c7cacb";
        break;
      case "right":
        style.borderRight = "1px solid #c7cacb";
        break;
      case "bottom":
        style.borderBottom = "1px solid #c7cacb";
        break;
      case "left":
        style.borderLeft = "1px solid #c7cacb";
        break;
      default:
        break;
    }
  }

  return (
    <Resize
      defaultSize={{ width: width, height: height }}
      minWidth={minWidth}
      minHeight={minHeight}
      style={style}
      enable={enable}
    >
      {children}
    </Resize>
  );
};

Resizable.defaultProps = {
  width: null,
  height: null,
  minWidth: null,
  minHeight: null,
  border: false,
};

export default Resizable;
