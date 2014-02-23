$(function(){
    var tt = document.createElement('div'),
        leftOffset = -($('html').css('padding-left').replace('px', '') + $('body').css('margin-left').replace('px', '')),
        topOffset = -32;
    tt.className = 'ex-tooltip';
    document.body.appendChild(tt);

    var data = {
        "xScale": "time",
        "yScale": "linear",
        "main": [
            {
                "className": ".pizza",
                "data": [
                    { "x": "2014-01-01", "y": 223},
                    { "x": "2014-02-01", "y": 475},
                    { "x": "2014-03-01", "y": 0 },
                    { "x": "2014-04-01", "y": 0 },
                    { "x": "2014-05-01", "y": 0 },
                    { "x": "2014-06-01", "y": 0 },
                    { "x": "2014-07-01", "y": 0 },
                    { "x": "2014-08-01", "y": 0 },
                    { "x": "2014-09-01", "y": 0 },
                    { "x": "2014-10-01", "y": 0 },
                    { "x": "2014-11-01", "y": 0 },
                    { "x": "2014-12-01", "y": 0 }

                ]
            }
        ]
    };
    var opts = {
        paddingLeft:25,
        paddingRight: 0,
        axisPaddingTop: 5,
        axisPaddingLeft: 5,
        dataFormatX: function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
        tickFormatX: function (x) { return d3.time.format('%m-%Y')(x); },

        mouseover: function (d, i) {
            var pos = $(this).offset();
            $(tt).text(d3.time.format('%A')(d.x) + ': ' + d.y)
                .css({top: topOffset + pos.top, left: pos.left + leftOffset})
                .show();
        },
        "mouseout": function (x) { $(tt).hide(); }
    };

    if ($("#left-sidebar-chart").length > 0) {
        new xChart('line-dotted', data, '#left-sidebar-chart', opts);
    }

    if ($(".xcharts-line-dotted").length > 0) {
        new xChart('line-dotted', data, '.xcharts-line-dotted', opts);
    }


});