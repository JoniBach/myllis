import React from "react";
import { MultiPage as Mpage } from "../multiPage/MultiPage";

import { Meta } from "@storybook/react/types-6-0";
import { multiPageData } from "../../common/multipageTestData";


export const MultiPage: React.FC<{}> = () => (
  <Mpage data={multiPageData} />
);

export default {
  title: "MultiPage",
  component: Mpage,
} as Meta;
