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
                    { "x": "2014-01-01", "y": 3076},
                    { "x": "2014-02-01", "y": 3849},
                    { "x": "2014-03-01", "y": 5282 },
                    { "x": "2014-04-01", "y": 2000 },
                    { "x": "2014-05-01", "y": 1340 },
                    { "x": "2014-06-01", "y": 1110 },
                    { "x": "2014-07-01", "y": 3201 },
                    { "x": "2014-08-01", "y": 4912 },
                    { "x": "2014-09-01", "y": 2312 },
                    { "x": "2014-10-01", "y": 2199 },
                    { "x": "2014-11-01", "y": 990 },
                    { "x": "2014-12-01", "y": 4910 }

                ]
            }
        ]
    };
    var opts = {
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
        "mouseout": function (x) { $(tt).hide(); }
    };

    if ($("#left-sidebar-chart").length > 0) {
        new xChart('line-dotted', data, '#left-sidebar-chart', opts);
    }

    if ($(".xcharts-line-dotted").length > 0) {
        new xChart('line-dotted', data, '.xcharts-line-dotted', opts);
    }


});