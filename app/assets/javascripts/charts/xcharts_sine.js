$(function () {
    var data = [
        {
            "xScale":"ordinal",
            "comp":[],
            "main":[
                {
                    "className":".main.l1",
                    "data":[
                        { "y":15, "x":"2012-01-19T00:00:00" },
                        { "y":11, "x":"2012-02-20T00:00:00" },
                        { "y":8, "x":"2012-03-21T00:00:00" },
                        { "y":10, "x":"2012-04-22T00:00:00" },
                        { "y":1, "x":"2012-05-23T00:00:00" },
                        { "y":6, "x":"2012-06-24T00:00:00" },
                        { "y":8, "x":"2012-07-25T00:00:00" },
                        { "y":7, "x":"2012-08-21T00:00:00" },
                        { "y":12, "x":"2012-09-22T00:00:00" },
                        { "y":13, "x":"2012-10-23T00:00:00" },
                        { "y":2, "x":"2012-11-24T00:00:00" },
                        { "y":8, "x":"2012-12-25T00:00:00" }
                    ]
                },{
                    "className":".main.l2",
                    "data":[
                        {"y":29,"x":"2012-01-19T00:00:00"},
                        {"y":33,"x":"2012-02-20T00:00:00"},
                        {"y":13,"x":"2012-03-21T00:00:00"},
                        {"y":16,"x":"2012-04-22T00:00:00"},
                        {"y":7,"x":"2012-05-23T00:00:00"},
                        {"y":18,"x":"2012-06-24T00:00:00"},
                        {"y":8,"x":"2012-07-25T00:00:00"},
                        {"y":7,"x":"2012-08-23T00:00:00"},
                        {"y":10,"x":"2012-09-24T00:00:00"},
                        {"y":15,"x":"2012-10-25T00:00:00"},
                        {"y":9,"x":"2012-11-23T00:00:00"},
                        {"y":16,"x":"2012-12-25T00:00:00"}
                    ]
                }
            ],
            "type":"line-dotted",
            "yScale":"linear"
        },{
            "xScale":"ordinal",
            "comp":[],
            "main":[
                {
                    "className":".main.l1",
                    "data":[
                        {"y":12,"x":"2012-01-19T00:00:00"},
                        {"y":18,"x":"2012-02-20T00:00:00"},
                        {"y":8,"x":"2012-03-21T00:00:00"},
                        {"y":7,"x":"2012-04-22T00:00:00"},
                        {"y":6,"x":"2012-05-23T00:00:00"},
                        {"y":12,"x":"2012-06-24T00:00:00"},
                        {"y":8,"x":"2012-07-25T00:00:00"},
                        {"y":6,"x":"2012-08-23T00:00:00"},
                        {"y":9,"x":"2012-09-24T00:00:00"},
                        {"y":7,"x":"2012-10-25T00:00:00"},
                        {"y":3,"x":"2012-11-23T00:00:00"},
                        {"y":1,"x":"2012-12-25T00:00:00"}
                    ]
                }            ],
            "type":"cumulative",
            "yScale":"linear"
        }
    ];

    var order = [0, 1],
        i = 0,
        xFormat = d3.time.format('%A'),
        rotateTimer,
        chart,
        t = 3500;

    if ($("#xchart-sine").length > 0) {
        chart = new xChart('bar', data[order[i]], '#xchart-sine', {
            axisPaddingTop: 5,
            paddingLeft: 30,
            dataFormatX: function (x) { return new Date(x); },
            tickFormatX: function (x) { return d3.time.format('%B')(x); }
        });

        rotateTimer = setTimeout(rotateChart, t);
    }

    function updateChart(i) {
        chart.setData(data[i]);
    }

    function rotateChart() {
        i += 1;
        i = (i >= order.length) ? 0 : i;
        updateChart(order[i]);
        rotateTimer = setTimeout(rotateChart, t);
    }

});