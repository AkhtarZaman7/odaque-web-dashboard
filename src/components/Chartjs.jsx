import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const Chartjs = () => {
  useEffect(() => {
    const ctx = document.getElementById("lineChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Line 1",
            data: [10, 20, 15, 25, 30, 35, 40, 45],
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            fill: false,
          },
          {
            label: "Line 2",
            data: [30, 25, 8, 35, 40, 30, 45, 50, 55],
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            grid: {
              display: false,
            },
          },
          y: {
            min: 0,
            max: 60,
            stepSize: 10,
            grid: {
              display: true,
            },
          },
        },
        elements: {
          point: {
            radius: 0, // Set radius to 0 to hide the dots
          },
          line: {
            tension: 0.4,
          },
        },
      },
    });
  }, []);

  return <canvas id="lineChart"></canvas>;
};

export default Chartjs;
