var eight = [2.55, 3.02, .464, 3.1, 14.9];
var eightData = ["Total Revenue: 2.55", "Total Spending: 3.02", "Total Deficit: .464", "Total Deficit as a % of GDP: 3.1", "GDP: 14.9"];
var nine = [2.1, 3.52, 1.41, 9.8, 14.4];
var nineData = ["Total Revenue: 2.1", "Total Spending: 3.52", "Total Deficit: 1.41", "Total Deficit as a % of GDP: 9.8", "GDP: 14.4"];

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(eight);
var barEnter = barUpdate.enter().append("div");

var button = document.getElementById("toggle");
var year = d3.select("#year");

barEnter.style("width", function(d) {
    return d * 60 + "px"; });
barEnter.data(eightData);
barEnter.text(function (d) { return d; });

var transition = function(e){
    if (year.text() == "2008 (in trillions)"){
	year.text("2009 (in trillions)");
	barEnter.data(nine);
	
	barEnter.transition().duration(2000).style("width", function(d) {
	    return d * 60 + "px"; });
	barEnter.data(nineData);
	barEnter.text(function(d) { return d; });
    }
    else if (year.text() == "2009 (in trillions)"){
	year.text("2008 (in trillions)");
	barEnter.data(eight);
	
	barEnter.transition().duration(2000).style("width", function(d) {
	    return d * 60 + "px"; });
	barEnter.data(eightData);
	barEnter.text(function(d) { return d; });
    }
};

button.addEventListener("click", transition);
