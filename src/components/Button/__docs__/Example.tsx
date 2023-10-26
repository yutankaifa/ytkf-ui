import React, { FC } from "react";
import Button, { ButtonProps } from "../index";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {
    console.log("Hello Button!");
  },
  primary = true,
  size = "small",
  text = "Button",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      />
    </div>
  );
};

export default Example;
