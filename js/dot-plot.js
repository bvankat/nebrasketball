async function dotPlot() {
	
	const response = await fetch('/data/data.json');
	const ratings_data = await response.json();

// Set up the chart dimensions
const margin = { top: 20, right: 10, bottom: 20, left: 0 };

// Get the parent container's width instead of window width
const container = d3.select("#dot-plot-container").node();
const containerWidth = container ? container.getBoundingClientRect().width : 700;
const width = containerWidth - margin.left - margin.right;
const height = 40;

// Build data dictionary defensively: include only present, numeric values
const candidates = [
	["Kenpom", ratings_data?.kenpom?.rating],
	["KPI", ratings_data?.kpi_sports?.kpi_ranking],
	["NET", ratings_data?.trank?.torvik_NET], // or ratings_data?.ncaa?.net_rank
	["SOR", ratings_data?.espn?.sor],
	["BPI", ratings_data?.espn?.bpi],
	["Torvik", ratings_data?.trank?.trank],
	["RPI", ratings_data?.warrennolan?.rpi],
	["ELO", ratings_data?.warrennolan?.elo],
	["Massey", ratings_data?.massey_ratings?.massey_rank],
	["TR", ratings_data?.teamrankings?.rank],
	["WAB", ratings_data?.trank?.wab_rank],
	["SRS", ratings_data?.sports_reference?.SRS_rank],
	["Haslametrics", ratings_data?.haslametrics?.haslam_rating],
	["Miyakawa", ratings_data?.evanmiya?.miya_rating],
	["7OT", ratings_data?.seven_overtimes?.ranking],
	["SQ", ratings_data?.shot_quality?.sq_ranking],
	["Bauertology", ratings_data?.bauertology?.BRCT_rank],
	["Coaches Poll", ratings_data?.polls?.coaches_rank],
	["AP Poll", ratings_data?.polls?.ap_rank],
];

const dataEntries = candidates
	.map(([k, v]) => [k, parseInt(v, 10)])
	.filter(([, v]) => Number.isFinite(v));

const data = Object.fromEntries(dataEntries);

// If no valid data points, exit gracefully
if (Object.keys(data).length === 0) {
	console.warn("dotPlot: No valid data points available; skipping chart render.");
	return;
}

// Determine the highest data point
const highestDataPoint = d3.max(Object.values(data));

// Set the highest endpoint 30 more than the highest data point
const highestEndpoint = highestDataPoint + 15;

// Color scale for dots
const colorScale = d3.scaleLinear()
  .domain([highestEndpoint, 40, 20])
  .range(['#ffffcc', '#fea849', '#e42320']);

// Create an SVG container
const svg = d3.select("#dot-plot-container")
  .append("svg")
  .attr("width", "100%") // Make SVG responsive
  .attr("height", height + margin.top + margin.bottom)
  .attr("viewBox", `0 0 ${containerWidth} ${height + margin.top + margin.bottom}`) // Add viewBox for scaling
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