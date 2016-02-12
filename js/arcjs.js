var svg = d3.select("#arcjs")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(200,300)");

var arc = d3.svg.arc()
    .innerRadius(180)
    .outerRadius(70)
    .startAngle(1.5 * Math.PI)
    .endAngle(2*Math.PI);
var arc2 = d3.svg.arc()
    .innerRadius(180)
    .outerRadius(70)
    .startAngle(2 * Math.PI)
    .endAngle(2.5*Math.PI);

svg.append("path")
    .attr("class", "arc")
    .attr("d", arc)

svg.append("path")
    .attr("class", "arc2")
    .attr("d", arc2)
    .attr("fill","red");