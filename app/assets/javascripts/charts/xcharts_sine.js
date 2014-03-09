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
                        { "y":780, "x":"2012-01-01" },
                        { "y":965, "x":"2012-02-01" },
                        { "y":1044, "x":"2012-03-01" },
                        { "y":0, "x":"2012-04-01" },
                        { "y":0, "x":"2012-05-01" },
                        { "y":0, "x":"2012-06-01" },
                        { "y":0, "x":"2012-07-01" },
                        { "y":0, "x":"2012-08-01" },
                        { "y":0, "x":"2012-09-01" },
                        { "y":0, "x":"2012-10-01" },
                        { "y":0, "x":"2012-11-01" },
                        { "y":0, "x":"2012-12-01" }
                    ]
                },{
                    "className":".main.l2",
                    "data":[
                        {"y":665,"x":"2012-01-01"},
                        {"y":542,"x":"2012-02-01"},
                        {"y":601,"x":"2012-03-01"},
                        {"y":448,"x":"2012-04-01"},
                        {"y":424,"x":"2012-05-01"},
                        {"y":475,"x":"2012-06-01"},
                        {"y":501,"x":"2012-07-01"},
                        {"y":489,"x":"2012-08-01"},
                        {"y":501,"x":"2012-09-01"},
                        {"y":675,"x":"2012-10-01"},
                        {"y":688,"x":"2012-11-01"},
                        {"y":678,"x":"2012-12-01"}
                    ]
                }
            ]

        },{
            "xScale":"time",
            "yScale":"linear",
            "comp":[],
            "main":[
                {},{}, // WGG adding empty sets to change color of this chart
                {           //data points for graph 2 - Kent
                    "className":".main.l1",
                    "data":[
                        {"y":2304,"x":"2012-01-01"},
                        {"y":2604,"x":"2012-02-01"},
                        {"y":2804,"x":"2012-03-01"},
                        {"y":0,"x":"2012-04-01"},
                        {"y":0,"x":"2012-05-01"},
                        {"y":0,"x":"2012-06-01"},
                        {"y":0,"x":"2012-07-01"},
                        {"y":0,"x":"2012-08-01"},
                        {"y":0,"x":"2012-09-01"},
                        {"y":0,"x":"2012-10-01"},
                        {"y":0,"x":"2012-11-01"},
                        {"y":0,"x":"2012-12-01"}
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