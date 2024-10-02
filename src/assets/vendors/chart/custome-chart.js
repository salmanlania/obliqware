if ($(".chart-container").length) {
  const chartData = {
    labels: ["Python", "Java", "PHP", "JavaScript", "WordPress", "Others"],
    data: [45.5, 8.4, 13.6, 4.2, 24.0, 4.3],
  };

  const myChart = document.querySelector(".skill-two__chart");

  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [{
        label: false,
        data: chartData.data,
      }, ],
    },
    options: {
      borderWidth: 2,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}