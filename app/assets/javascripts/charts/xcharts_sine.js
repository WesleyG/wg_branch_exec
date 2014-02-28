$(function () {

    var tt = document.createElement('div'),
        leftOffset = -($('html').css('padding-left').replace('px', '') + $('body').css('margin-left').replace('px', '')),
        topOffset = -32;
    tt.className = 'ex-tooltip';
    document.body.appendChild(tt);

    var data = [
        {
            "xScale":"time",
            "yScale":"linear",
            "comp":[],
            "main":[        //data points for graph 1 - Kent
                {
                    "className":".main.l1",
                    "data":[
                        { "y":15, "x":"2012-01-19" },
                        { "y":11, "x":"2012-02-20" },
                        { "y":8, "x":"2012-03-21" },
                        { "y":10, "x":"2012-04-22" },
                        { "y":1, "x":"2012-05-23" },
                        { "y":6, "x":"2012-06-24" },
                        { "y":8, "x":"2012-07-25" },
                        { "y":7, "x":"2012-08-21" },
                        { "y":12, "x":"2012-09-22" },
                        { "y":13, "x":"2012-10-23" },
                        { "y":2, "x":"2012-11-24" },
                        { "y":8, "x":"2012-12-25" }
                    ]
                },{
                    "className":".main.l2",
                    "data":[
                        {"y":29,"x":"2012-01-19"},
                        {"y":33,"x":"2012-02-20"},
                        {"y":13,"x":"2012-03-21"},
                        {"y":16,"x":"2012-04-22"},
                        {"y":7,"x":"2012-05-23"},
                        {"y":18,"x":"2012-06-24"},
                        {"y":8,"x":"2012-07-25"},
                        {"y":7,"x":"2012-08-23"},
                        {"y":10,"x":"2012-09-24"},
                        {"y":15,"x":"2012-10-25"},
                        {"y":9,"x":"2012-11-23"},
                        {"y":16,"x":"2012-12-25"}
                    ]
                }
            ]

        },{
            "xScale":"time",
            "yScale":"linear",
            "comp":[],
            "main":[
                {           //data points for graph 2 - Kent
                    "className":".main.l1",
                    "data":[
                        {"y":12,"x":"2012-01-19"},
                        {"y":18,"x":"2012-02-20"},
                        {"y":8,"x":"2012-03-21"},
                        {"y":7,"x":"2012-04-22"},
                        {"y":6,"x":"2012-05-23"},
                        {"y":12,"x":"2012-06-24"},
                        {"y":8,"x":"2012-07-25"},
                        {"y":6,"x":"2012-08-23"},
                        {"y":9,"x":"2012-09-24"},
                        {"y":7,"x":"2012-10-25"},
                        {"y":3,"x":"2012-11-23"},
                        {"y":1,"x":"2012-12-25"}
                    ]
                }            
            ]
        }
    ];
    var opt = {
        paddingLeft:35,
        paddingRight: 25,
        axisPaddingTop: 5,
        axisPaddingLeft: 5,
        dataFormatX: function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
        tickFormatX: function (x) { return d3.time.format('%B')(x); },

        mouseover: function (d, i) {
            var pos = $(this).offset();
            $(tt).text(d3.time.format('%B')(d.x) + ': ' + d.y)
                .css({top: topOffset + pos.top, left: pos.left + leftOffset})
                .show();
        },
        "mouseout": function(x) { $(tt).hide(); }
    };
    var order = [0, 1],
        i = 0,
        xFormat = d3.time.format('%B'),
        rotateTimer,
        chart,
        t = 7000;   //edit this to change time of the graph switching by X milisec - Kent

    if ($("#xchart-sine").length > 0) {
        chart = new xChart('line-dotted', data[order[i]], '#xchart-sine', opt);

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