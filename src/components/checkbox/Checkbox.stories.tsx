import React from "react";
import { Checkbox as Cbox } from "./Checkbox";

import { Meta } from "@storybook/react/types-6-0";

export const Select: React.FC<{}> = () => (
  <Cbox 
  label="Option Checkbox"
  onChange={() => null}
  />
);

export default {
  title: "Checkbox",
  component: Cbox,
} as Meta;
