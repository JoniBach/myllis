import React from "react";
import { Form as Frm } from "../form/Form";

import { Meta } from "@storybook/react/types-6-0";
import { multiPageData } from "../../common/multipageTestData";


export const Form: React.FC<{}> = () => (
  <Frm layoutData={multiPageData} />
);

export default {
  title: "Form",
  component: Frm,
} as Meta;
