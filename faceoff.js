window.chart = require('chart.js');
// import {fetchFighters} from './util/api_util.js'
// const ctx1 = document.getElementById("myChart");
// const ctx1 = document.getElementById("myChart").getContext("2d");

// let fighters = []
// // fetchFighters().then( (data) => console.log(data))
// var results = function(data) {
//   console.log(data);
// }
// fetchFighters()


var UfcAPI = require('ufc-api');
// console.log(UfcAPI);
var ufc = new UfcAPI({
  version: '3'
});
// console.log(ufc);

ufc.titleHolders(function(err, res) {
  console.log(res);
});


// Significant Strikes Landed per Minute (SLpM)
const ctx1a = $("#slpmChart");
ctx1a.attr('height', 30);
ctx1a.attr('width', 450);
const slpmChart = new Chart(ctx1a, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [7.83],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [-3.20],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -10,
                  max: 10,
                  stepSize: 10
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Significant Striking Accuracy (Str. Acc.)
const ctx1b = $("#strAccChart");
ctx1b.attr('height', 30);
ctx1b.attr('width', 450);
const strAccChart = new Chart(ctx1b, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [51],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [-47],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -100,
                  max: 100,
                  stepSize: 100
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Significant Strikes Absorbed per Minute (SApM)
const ctx1c = $("#sapmChart");
ctx1c.attr('height', 30);
ctx1c.attr('width', 450);
const sapmChart = new Chart(ctx1c, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [1.82],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [-2.28],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -5,
                  max: 5,
                  stepSize: 5
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Significant Strikes Defense (Str. Def.)
const ctx1d = $("#strDefChart");
ctx1d.attr('height', 30);
ctx1d.attr('width', 450);
const strDefChart = new Chart(ctx1d, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [63],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [-66],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -100,
                  max: 100,
                  stepSize: 100
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Average Takedowns Landed per Fifteen Minutes (TD Avg.)
const ctx1e = $("#tdAvgChart");
ctx1e.attr('height', 30);
ctx1e.attr('width', 450);
const tdAvgChart = new Chart(ctx1e, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [1.5],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [0],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -2,
                  max: 2,
                  stepSize: 2
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Takedown Accuracy (TD Acc.)
const ctx1f = $("#tdAccChart");
ctx1f.attr('height', 30);
ctx1f.attr('width', 450);
const tdAccChart = new Chart(ctx1f, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [66],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [0],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -100,
                  max: 100,
                  stepSize: 100
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Takedown Defense (TD Def.)
const ctx1g = $("#tdDefChart");
ctx1g.attr('height', 30);
ctx1g.attr('width', 450);
const tdDefChart = new Chart(ctx1g, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [94],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [-86],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -100,
                  max: 100,
                  stepSize: 100
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

// Average Submissions Attempted per 15 Minutes (Sub. Avg.)
const ctx1h = $("#subAvgChart");
ctx1h.attr('height', 30);
ctx1h.attr('width', 450);
const subAvgChart = new Chart(ctx1h, {
    type: 'horizontalBar',
    height: 30,
    width: 300,
    data: {
        labels: ["SLpM"],
        datasets: [{
            data: [0.5],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }, {
            data: [-0.2],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                // scaleLabel: {
                //   display: true
                // },
                display: false,
                stacked: true,
                ticks: {
                  display: false,
                  reverse: true,
                  beginAtZero: true,
                  min: -1,
                  max: 1,
                  stepSize: 1
                },
                gridLines: {
                  display: false,
                  color: "#FFFFFF",
                  zeroLineColor: "#000000"
                }
            }],
            yAxes: [{
                display: false,
                barThickness: 100,
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false
                }
            }],
        },
    },
    responsive: false
});

const ctx2 = $("#myRadarChart");
const myRadarChart = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['STRIKING', 'SUBMISSIONS', 'TAKEDOWNS'],
        datasets: [{
            data: [61.87, 16.88, 21.25],
            backgroundColor: 'rgba(250, 0, 50, 0.5)',
            borderColor: 'rgba(250, 0, 50, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scaleShowLabels: false,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scale: {
            beginAtZero: true,
            gridLines: {
              color: 'rgba(250, 0, 50, 1)'
            },
            angleLines: {
                display: true,
                showLabels: false,
                lineWidth: 1,
                color: "#FFFFFF"
            },
            pointLabels: {
              fontSize: 14,
              fontColor: "#FFFFFF"
            },
            ticks: {
              display: false,
              beginAtZero: true,
              min: 0,
              suggestedMin: 0,
              stepSize: 100,
              color: "#FFFFF",
            }
        }
    },
    responsive: false
});

const ctx3 = $("#myOtherRadarChart");
const myOtherRadarChart = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: ['STRIKING', 'SUBMISSIONS', 'TAKEDOWNS'],
        datasets: [{
            data: [81.78, 18.22, 0],
            backgroundColor: 'rgba(0, 70, 250, 0.5)',
            borderColor: 'rgba(0, 70, 250, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scaleShowLabels: false,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scale: {
            beginAtZero: true,
            gridLines: {
              color: 'rgba(0, 70, 250, 1)'
            },
            angleLines: {
                display: true,
                showLabels: false,
                lineWidth: 1,
                color: "#FFFFFF"
            },
            pointLabels: {
              fontSize: 14,
              fontColor: "#FFFFFF"
            },
            ticks: {
              display: false,
              beginAtZero: true,
              min: 0,
              suggestedMin: 0,
              stepSize: 100,
              color: "#FFFFF",
            }
        }
    },
    responsive: false
});
