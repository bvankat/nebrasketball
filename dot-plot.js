async function dotPlot() {
	
	const response = await fetch('/data/data.js');
	const ratings_data = await response.json();

// Set up the chart dimensions
const margin = { top: 20, right: 10, bottom: 20, left: 0 };

const containerWidth = Math.min(700, window.innerWidth - 15);
const width = containerWidth - margin.left - margin.right;
const height = 40;

// New data with a dictionary
const data = {
	Kenpom: parseInt(ratings_data.kenpom.rating),
    KPI: ratings_data.kpi_sports.kpi_ranking,
    NET: parseInt(ratings_data.trank.torvik_NET),
    SOR: parseInt(ratings_data.espn.sor),
    BPI: parseInt(ratings_data.espn.bpi),
//    Sagarin: ratings_data.sagarin.sagarin_rate,
    Torvik: parseInt(ratings_data.trank.trank),
    RPI: parseInt(ratings_data.warrennolan.rpi),
    ELO: parseInt(ratings_data.warrennolan.elo),
    Massey: parseInt(ratings_data.massey_ratings.massey_rank),
    'Team Rankings': parseInt(ratings_data.teamrankings.rank),
    WAB:  parseInt(ratings_data.trank.wab_rank),
    SRS: parseInt(ratings_data.sports_reference.SRS_rank),
    Haslametrics: parseInt(ratings_data.haslametrics.haslam_rating),
    Miyakawa: parseInt(ratings_data.evanmiya.miya_rating),
    'Shot Quality': parseInt(ratings_data.shot_quality.sq_ranking),
    'Seven OT': parseInt(ratings_data.seven_overtimes.ranking), 
}

// Determine the highest data point
const highestDataPoint = d3.max(Object.values(data));

// Set the highest endpoint 30 more than the highest data point
const highestEndpoint = highestDataPoint + 15;

// Color scale for dots
const colorScale = d3.scaleLinear()
  .domain([highestEndpoint, 60, 10])
  .range(['#ffffcc', '#fea849', '#e42320']);

// Create an SVG container
const svg = d3.select("#dot-plot-container")
  .append("svg")
  .attr("width", containerWidth)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create a horizontal scale with swapped endpoints
const xScale = d3.scaleLinear()
  .domain([highestEndpoint, 1])
  .range([0, width]);

// Draw the horizontal line
svg.append("line")
  .attr("x1", xScale(highestEndpoint))
  .attr("y1", height / 2)
  .attr("x2", xScale(1))
  .attr("y2", height / 2)
  .attr("stroke", "#ccc");

// Draw tick marks at each end of the chart axis
svg.selectAll(".tick")
  .data([highestEndpoint, 1])
  .enter().append("line")
  .attr("class", "tick")
  .attr("x1", d => xScale(d))
  .attr("y1", height / 2 - 5)
  .attr("x2", d => xScale(d))
  .attr("y2", height / 2 + 5);

// Draw the dots based on the dictionary
const dotRadius = 9;
const dotStrokeColor = "#333";

// Track labeled values
const labeledValues = new Set();

const minValue = d3.min(Object.values(data));
const maxValue = d3.max(Object.values(data));
const medianValue = d3.median(Object.values(data));

// Find the closest point to the median
const closestPoint = Object.entries(data).reduce((acc, [key, value]) => {
  const currentDistance = Math.abs(value - medianValue);
  const closestDistance = Math.abs(acc.value - medianValue);
  return currentDistance < closestDistance ? { key, value } : acc;
}, { key: null, value: Infinity });

// Draw the dots for the highest, lowest, and closest-to-median values
Object.entries(data).forEach(([key, value]) => {
  const dot = svg.append("circle")
	.attr("cx", xScale(value))
	.attr("cy", height / 2)
	.attr("r", dotRadius)
	.attr("fill", colorScale(value))
	.attr("stroke", dotStrokeColor);

  if (value === minValue || value === maxValue || (closestPoint.key && key === closestPoint.key)) {
    // Check if the value has already been labeled
    if (!labeledValues.has(value)) {
	svg.append("text")
	  .attr("class", "dot-label")
	  .attr("x", xScale(value))
	  .attr("y", height / 2 - dotRadius - 5)
	  .attr("font-family", "Arial, sans-serif")
	  .attr("font-size", 10) // Adjusted dot label font size to 10px
	  .text(key);
    
    // Add the value to the set of labeled values
      labeledValues.add(value);
    }
}
	// Title for each dot with key and value
	dot.append("title").text(`${key}: ${value}`);
  
});

// Label the chart endpoints close to the chart axis
svg.append("text")
  .attr("x", xScale(highestEndpoint)+10)
  .attr("y", height / 2 + 15) // Moved closer to the chart axis
  .attr("text-anchor", "middle")
  .attr("font-family", "Arial, sans-serif")
  .attr("font-size", 12)
  .attr("class", "endpoint-label")
  .text(highestEndpoint);

svg.append("text")
  .attr("x", xScale(1))
  .attr("y", height / 2 + 15) // Moved closer to the chart axis
  .attr("text-anchor", "middle")
  .attr("font-family", "Arial, sans-serif")
  .attr("font-size", 12)
  .attr("class", "endpoint-label")
  .text("1");
  
  } // end dotPlot()