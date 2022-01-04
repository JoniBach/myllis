import React from "react";
import { Component } from "./Component";

import { Meta } from "@storybook/react/types-6-0";
import { Button } from "../button/Button";

// Primary will be the name for the first story
export const Primary: React.FC<{}> = () => (
  <div>
    <Component title="My Title">
      <div>Some content</div>
    </Component>
  </div>
);

// Secondary will be the name for the second story
export const Secondary: React.FC<{}> = () => (
 <Button onClick={() => console.log('test')}>test</Button>
);

export default {
  title: "Component", // Title of you main menu entry for this group of stories
  component: Component, // This is the component documented by this Storybook page
} as Meta;