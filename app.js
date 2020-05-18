var request = new XMLHttpRequest();
var data;
request.open("GET", "Sheet.csv");
request.addEventListener('load', function (event) {
    if (request.status >= 200 && request.status < 300) {
        console.log(request.responseText);
    } else {
        console.warn(request.statusText, request.responseText);
    }
});
request.send();
var ctxL = document.getElementById("lineChart1").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["12:10", "12:30", "12:50", "12:10", "12:10", "12:10", "12:10"],
        datasets: [{
            label: "Total People Count",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'lightblue',
            ],
            borderColor: [
                'blue',
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'People'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(mins)'
                }
            }]
        },
        responsive: true
    }
});

var ctxL = document.getElementById("lineChart2").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["12:10", "12:30", "12:50", "12:10", "12:10", "12:10", "12:10"],
        datasets: [{
            label: "Safe Count",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'lightgreen',
            ],
            borderColor: [
                'green',
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'People'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(mins)'
                }
            }]
        },
        responsive: true
    }
});

var ctxL = document.getElementById("lineChart3").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["12:10", "12:30", "12:50", "12:10", "12:10", "12:10", "12:10"],
        datasets: [{
            label: "Low Risk Count",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                '#db6571',
            ],
            borderColor: [
                'red',
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'People'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(mins)'
                }
            }]
        },
        responsive: true
    }
});

var ctxL = document.getElementById("lineChart4").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["12:10", "12:30", "12:50", "12:10", "12:10", "12:10", "12:10"],
        datasets: [{
            label: "High Risk Count",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'lightyellow',
            ],
            borderColor: [
                'yellow',
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'People'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time(mins)'
                }
            }]
        },
        responsive: true
    }
});
