// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
    series: [
      {
        name: "Last to last week",
        data: [1, 2, 3, 4, 3, 2, 1, 6],
      },
      {
        name: "Last week",
        data: [2, 1, 3, 9, 5, 1, 11, 10],
      },
      {
        name: "This week",
        data: [5, 4, 6, 2, 5, 8, 2, 3],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    yaxis: {
      title: {
        text: "hr (hours)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "hours " + val + " hr";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  