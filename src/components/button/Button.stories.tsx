import React from "react";
import { Button as Btn } from "./Button";

import { Meta } from "@storybook/react/types-6-0";

export const Button: React.FC<{}> = () => (
  <Btn onClick={() => console.log("test")}>test</Btn>
);

export default {
  title: "Button",
  component: Btn,
} as Meta;
