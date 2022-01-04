import React from "react";
import { SingleSelect as Slct } from "./Select";

import { Meta } from "@storybook/react/types-6-0";

const options = ['option 1', 'option 2', 'option 3',]

export const Select: React.FC<{}> = () => (
  <Slct 
  label="Single Select"
  data={options}
  onChange={() => null}
  />
);

export default {
  title: "Select",
  component: Slct,
} as Meta;
