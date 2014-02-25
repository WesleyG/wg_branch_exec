<html>
<head>
  <script type='text/javascript' src='https://www.google.com/jsapi'></script>
  <script type='text/javascript'>
   google.load('visualization', '1', {'packages': ['geomap']});
   google.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = google.visualization.arrayToDataTable([
        ['State', 'Enrollments'],
        ['California', 200],
        ['Florida', 300],
        ['Texas', 400],
        ['Washington', 500],
        ['Wisconsin',600],
        ['Ohio', 700],
        ['Michigan', 500],
        ['Utah', 500],
        ['New Mexico', 500],
        ['Alabama', 0],
        ['Arizona', 0],
        ['Arkansas', 0],
        ['Colorado', 0],
        ['Connecticut', 0],
        ['Delaware', 0],
        ['Georgia', 0],
        ['Idaho', 0],
        ['Illinois', 0],
        ['Indiana', 0],
        ['Iowa', 0],
        ['Kansas', 0],
        ['Kentucky', 0],
        ['Louisiana', 0],
        ['Maine', 0],
        ['Maryland', 0],
        ['Massachusetts', 0],
        ['Minnesota', 0],
        ['Missouri', 0],
        ['Montana', 0],
        ['Mississippi', 0],
        ['Nebraska', 0],
        ['New Hampshire', 0],
        ['New Jersey', 0],
        ['Nevada',0],
        ['New York', 0],
        ['North Carolina', 0],
        ['North Dakota', 0],
        ['Oklahoma', 0],
        ['Oregon', 0],
        ['Pennsylvania', 0],
        ['Rhode Island', 0],
        ['South Carolina', 0],
        ['South Dakota', 0],
        ['Tennessee', 0],
        ['Vermont', 0],
        ['Virginia', 0],
        ['West Virginia', 0],
        ['Wyoming', 0]       
      ]);

      var options = {
	colorAxis: {minValue: 0, colors: ['#0xCCE7FC', '#0x0D4878']}
      };
      options['dataMode'] = 'regions';
      options['region'] = 'US';
      //options['colors'] = [0x7DF57D,0x076607];

      var container = document.getElementById('map_canvas');
      var geomap = new google.visualization.GeoMap(container);
      geomap.draw(data, options);
  };
  </script>
</head>

<body>
  <div id='map_canvas'></div>
</body>

</html>