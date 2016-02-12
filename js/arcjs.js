var svg = d3.select("body")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200)
    .append("g")
    .attr("transform", "translate(100,100)");

var arc = d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(0)
    .endAngle(2 * Math.PI);

svg.append("path")
    .attr("class", "arc")
    .attr("d", arc);