//U59555732
// Write a function to initialize the page
function initializePage() {
    const dataContainer = d3.select("#data-container");

    // Sample data points
    const data = [1, 2, 3, 4, 5];

    // Create div elements as data points
    const dataPoints = dataContainer.selectAll(".data-point")
        .data(data)
        .enter()
        .append("div")
        .classed("data-point", true)
        .text(d => d);

    // Attach event listeners for interactivity
    dataPoints.on("mouseover", function() {
        d3.select(this).style("background-color", "firebrick");
    });

    dataPoints.on("mouseout", function() {
        d3.select(this).style("background-color", "lightblue");
    });
}

// Call the initializePage function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializePage);
// Inside the initializePage function
dataPoints.on("mouseover", function() {
    d3.select(this).style("background-color", "firebrick");
});

dataPoints.on("mouseout", function() {
    d3.select(this).style("background-color", "lightblue");
});
