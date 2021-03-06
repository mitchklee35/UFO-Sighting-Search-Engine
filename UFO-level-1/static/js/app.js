// from data.js
var tableData = data;
// console.log(tableData);



// YOUR CODE HERE!
// Write code that appends a table to your web 
// page and then adds new rows of data for each UFO sighting.
var tbody = d3.select(tbody);
// var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
function buildtable(tableData) {
    // For each loop to log sighting in table body
    tableData.forEach(function (ufoSighting) {
        // console.log(ufoSighting);
        var tbody = d3.select("tbody")
        var row = tbody.append("tr");

        // Use Key Value to pull from data source and place into table
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

// function init() {


// }


// ----------------------------------------------------
// Create button and search for date in sightings
var button = d3.select("#filter-btn");
button.on("click", function () {
    var tbody = d3.select("tbody")
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);
    filteredData.forEach(function (selections) {
        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// init();
buildtable(tableData)