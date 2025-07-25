"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartData } from "@/lib/shadeCnUtils";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;
const AppAreaChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart data={chartData} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={"month"}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value: string) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset={"5%"}
                stopColor="var(--color-desktop)"
                stopOpacity={0.8}
              />
              <stop
                offset={"95%"}
                stopColor="var(--color-desktop)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset={"5%"}
                stopColor="var(--color-mobile)"
                stopOpacity={0.8}
              />
              <stop
                offset={"95%"}
                stopColor="var(--color-mobile)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey={"mobile"}
            type={"natural"}
            fill="url(#fillMobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId={"a"}
          />
          <Area
            dataKey={"desktop"}
            type={"natural"}
            fill="url(#fillDesktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId={"a"}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
