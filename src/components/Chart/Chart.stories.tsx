import React, { useState } from "react";
import { Chart as Chrt } from "./Chart";

import { Meta } from "@storybook/react/types-6-0";
import { config, data, data01, options2, pieConfig } from "../../common/chartTestData";
import { Button } from "../..";

export const Chart = () => {
  const [chartType, setChartType] = useState<string>("line");

  return (
    <div style={{maxWidth: '100%', }}>
      {chartType === "pie" ? (
        <Chrt config={pieConfig} data={data01} type={chartType} />
      ) : (
        <Chrt config={config} data={data} type={chartType} />
      )}

      <div style={{ maxWidth: '100%' }}>
        {options2.map((item: string) => (
          <Button  onClick={() => setChartType(item)}>{item}</Button>
        ))}
      </div>
    </div>
  );
};

export default {
  title: "Chart",
  component: Chrt,
} as Meta;
