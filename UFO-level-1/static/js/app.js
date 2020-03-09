// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

// Enter initial table with all the data
tableData.forEach(function(ufoSiting) {
   var row = tbody.append("tr");
   Object.entries(ufoSiting).forEach(function([key, value]) {
     var cell = row.append("td");
     cell.text(value);
   });
 });

 var filterButton = d3.select("#filter-btn");

 filterButton.on("click", function() {
    var filteredDate = d3.select('#datetime').property("value");
    if(filteredDate !== ''){
        var filteredData = tableData.filter(tableData => tableData.datetime === filteredDate);
        tbody.html("");
        d3.event.preventDefault();
        console.log(filteredData)
        filteredData.forEach(function(ufoSiting) {
        var row = tbody.append("tr");
        Object.entries(ufoSiting).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }
    else {
        var filteredData = tableData;
        tbody.html("");
        d3.event.preventDefault();
        console.log(filteredData)
        filteredData.forEach(function(ufoSiting) {
        var row = tbody.append("tr");
        Object.entries(ufoSiting).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
    });
    }
  });



