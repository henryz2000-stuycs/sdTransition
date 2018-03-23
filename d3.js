var eight = [2.55, 3.02, .464, 3.1, 14.9];
var nine = [2.1, 3.52, 1.41, 9.8, 14.4];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

var transition = function(e){
    barEnter.transition().duration( function(d){ return d*1000; } )
	.style("width", function(d) {
	    return d * 10 + "px"; });
    barEnter.text(function(d) { return d; });
};


