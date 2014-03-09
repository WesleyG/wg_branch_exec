// Understanding charts (view syntax as javascript)

// File: /app/views/demo/dashboard.html.erb

  <div class="sine-chart" style="height: 300px" id="xchart-sine"></div>

// WG assumption is that <div class="sine-chart" points to...

//File: /app/assets/stylesheets/charts.scss

  // class for the animated chart on the dashboard
  .sine-chart {
    height: 186px;
  }

// WG assumption that id="xchart-sine" points to...

//File: /app/assets/javascripts/charts/xcharts_sine.js

