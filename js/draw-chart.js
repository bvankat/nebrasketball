// This is the old code for the Google chart - Unused as of Nov. 2025

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

	 
function drawChart() {
	   
	   total_score = parseInt(total_score);

	var data = google.visualization.arrayToDataTable([
	  ['Label', 'Value'],
	  ['', total_score],
	]);

	var options = {
	  width: 340, height: 340,
	  redFrom: 75, redTo: 100,
	  yellowFrom:50, yellowTo: 75,
	  minorTicks: 12
	};

	var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
	chart.draw(data, options);


	// Comment out these lines to disable needle bounce in offseason
	// Increase the multiplier applied to Math.random to increase bounciness. It basically equates to the range of values to bounce between.
	setInterval(function() {
	  data.setValue(0, 1, total_score-3 + Math.round(7 * Math.random()));
	  chart.draw(data, options);
	  }, 300);
 
 
  };  // end drawChart()
  
  
  // You'd also need to add this next line to the html to display the chart
  // <div id="chart_div" style="width: 340px; height: 340px; margin: 0 auto 40px auto; clear: both;"></div>
  