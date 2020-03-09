// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

tableData.forEach(function(ufoSiting) {
   console.log(ufoSiting);
   var row = tbody.append("tr");
   Object.entries(ufoSiting).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });

/*
for (var i = 0; i < tableData.length; i++) {
    console.log(tableData[i]);
    var row = tbody.append("tr");
    for (var j = 0; j < tableData[i].length; j++) {
        console.log(tableData[i].datetime)
    }
  }
*/


