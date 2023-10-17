import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default function LineChart() {
  const data = [
    {
      id: "Upcoming",
      color: "#347AE2",
      data: [
        {
          x: "Jan",
          y: 0,
        },
        {
          x: "Feb",
          y: 10,
        },
        {
          x: "Mar",
          y: 15,
        },
        {
          x: "Apr",
          y: 20,
        },
        {
          x: "May",
          y: 5,
        },
        {
          x: "Jun",
          y: 22,
        },
        {
          x: "Jul",
          y: 12,
        },
        {
          x: "Aug",
          y: 10,
        },
      ],
    },
    {
      id: "Pending",
      color: "#FF9500",
      data: [
        {
          x: "Jan",
          y: 10,
        },
        {
          x: "Feb",
          y: 30,
        },
        {
          x: "Mar",
          y: 20,
        },
        {
          x: "Apr",
          y: 25,
        },
        {
          x: "May",
          y: 10,
        },
        {
          x: "Jun",
          y: 20,
        },
        {
          x: "Jul",
          y: 5,
        },
        {
          x: "Aug",
          y: 20,
        },
      ],
    },
  ];

  const yTickValues = [0, 10, 20, 30, 40];
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 10, bottom: 60, left: 30 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom" // Use 'catmullRom' for a smoother curve
        enablePoints={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,

          
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Value",
          legendOffset: -40,
          legendPosition: "middle",
          yScale: yTickValues,
        }}
        enableGridX={false}
        useMesh={true}
        legends={[
          {
            anchor: "middle",
            direction: "row",
            justify: false,
            
            translateX: 225,
            translateY: 250,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
            items: [
              {
                id: "Pending",
                type: "circle",
                color: "#FF9500",
                label: "Pending",
                style: { display: 'inline-flex', alignItems: 'center' }
              },
              {
                id: "Upcoming",
                type: "circle",
                color: "#347AE2",
                label: "Upcoming",
                style: { display: 'inline-flex', alignItems: 'center' }
              },
            ],
          },
        ]}
      />
    </div>
  );
}
