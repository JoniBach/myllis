import React from "react";
import { Input as Inpt } from "./Input";

import { Meta } from "@storybook/react/types-6-0";

const inputTypes = [
  'text',
  'file',
  'number',
  'button',
  'text-area',
]

export const Input = () => (
 inputTypes.map((d) => ( <Inpt label={d} type={d} onChange={() => null}/>))
);

export default {
  title: "Input",
  component: Inpt,
} as Meta;
