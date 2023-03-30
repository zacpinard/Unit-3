//Example 1.1:  Selecting the <body> in main.js
//execute script when window is loaded
window.onload = function(){

    var container = d3.select("body") //get the <body> element from the DOM

};



//Example 1.2: Appending the <svg> to the <body> in main.js
    //Example 1.1 line 3...container block
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body




//Example 1.3: Adding attributes to the <svg> element in main.js
    //SVG dimension variables
    var w = 900, h = 500;

     //Example 1.2 line 1...container block
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", w) //assign the width
        .attr("height", h) //assign the height
        .attr("class", "container") //always assign a class (as the block name) for styling and future selection




//Example 1.4: Adding an inline style to the container in main.js
    //Example 1.3 line 4...container block
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", w) //assign the width
        .attr("height", h) //assign the height
        .attr("class", "container") //assign a class name
        .style("background-color", "rgba(0,0,0,0.2)"); //only put a semicolon at the end of the block!
    


//Example 1.5: A block with too many operands in main.js
    //Example 1.4 line 1...container block
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", w) //assign the width
        .attr("height", h) //assign the height
        .attr("class", "container") //assign a class name
        .style("background-color", "rgba(0,0,0,0.2)") //svg background color
        .append("rect") //add a <rect> element
        .attr("width", 800) //rectangle width
        .attr("height", 400) //rectangle height

    // <rect> is now the operand of the container block



//Example 1.6: Correctly formatted blocks with only one change of operand each in main.js
    //Example 1.5 line 1...container block
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", w) //assign the width
        .attr("height", h) //assign the height
        .attr("class", "container") //assign a class name
        .style("background-color", "rgba(0,0,0,0.2)"); //svg background color

    //innerRect block
    var innerRect = container.append("rect") //put a new rect in the svg
        .attr("width", 800) //rectangle width
        .attr("height", 400) //rectangle height


    
//Example 1.7: Binding a datum to the innerRect selection in main.js
    //Example 1.6 line 9...innerRect block
    var innerRect = container.append("rect") //put a new rect in the svg
        .datum(400)
        .attr("width", 800) //rectangle width
        .attr("height", 400) //rectangle height

    console.log(innerRect);



//Example 1.8: Using a datum in main.js
    //Example 1.7 line 1...innerRect block
    var innerRect = container.append("rect") //put a new rect in the svg
        .datum(400) //a single value is a datum
        .attr("width", function(d){ //rectangle width
            return d * 2; //400 * 2 = 800
        }) 
        .attr("height", function(d){ //rectangle height
            return d; //400
        })



//Example 1.9: Adding rectangle attributes and style in main.js
    //Example 1.8 line 1...innerRect block
    var innerRect = container.append("rect")
        .datum(400) //a single value is a DATUM
        .attr("width", function(d){ //rectangle width
            return d * 2; //400 * 2 = 800
        })
        .attr("height", function(d){ //rectangle height
            return d; //400
        })
        .attr("class", "innerRect") //class name
        .attr("x", 50) //position from left on the x (horizontal) axis
        .attr("y", 50) //position from top on the y (vertical) axis
        .style("fill", "#FFFFFF"); //fill color

//Example 2.3: A data array in main.js
    //below Example 1.9
    var dataArray = [10, 20, 30, 40, 50];

//Example 2.4: An important trio of operators in main.js
    //Example 2.3 line 1
    var dataArray = [10, 20, 30, 40, 50];

    var circles = container.selectAll(".circles") //but wait--there are no circles yet!
        .data(dataArray) //here we feed in an array
        .enter() //one of the great mysteries of the universe

//Example 2.5: Adding circles to match the data in main.js
    //Example 2.4 line 1
    var dataArray = [10, 20, 30, 40, 50];

    var circles = container.selectAll(".circles") //but wait--there are no circles yet!
        .data(dataArray) //here we feed in an array
        .enter() //one of the great mysteries of the universe
        .append("circle") //add a circle for each datum
        .attr("class", "circles") //apply a class name to all circles

//Example 2.6: Using the joined data in main.js
    //Example 2.5 line 1
    var dataArray = [10, 20, 30, 40, 50];

    var circles = container.selectAll(".circles") //but wait--there are no circles yet!
        .data(dataArray) //here we feed in an array
        .enter() //one of the great mysteries of the universe
        .append("circle") //add a circle for each datum
        .attr("class", "circles") //apply a class name to all circles
        .attr("r", function(d, i){ //circle radius
            console.log("d:", d, "i:", i); //let's take a look at d and i
            return d;
        })
        .attr("cx", function(d, i){ //x coordinate
            return 70 + (i * 180);
        })
        .attr("cy", function(d){ //y coordinate
            return 450 - (d * 5);
        });

//Example 2.7: The city populations data array from Week 2
var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

//Example 2.8: Using the cityPop array to create circles in main.js
var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

//Example 2.6 line 3
var circles = container.selectAll(".circles") //create an empty selection
    .data(cityPop) //here we feed in an array
    .enter() //one of the great mysteries of the universe
    .append("circle") //inspect the HTML--holy crap, there's some circles there
    .attr("class", "circles")
    .attr("id", function(d){
        return d.city;
    })
    .attr("r", function(d){
        //calculate the radius based on population value as circle area
        var area = d.population * 0.01;
        return Math.sqrt(area/Math.PI);
    })
    .attr("cx", function(d, i){
        //use the index to place each circle horizontally
        return 90 + (i * 180);
    })
    .attr("cy", function(d){
        //subtract value from 450 to "grow" circles up from the bottom instead of down from the top of the SVG
        return 450 - (d.population * 0.0005);
    });

//Example 3.1: The x coordinate linear scale in main.js
    //above Example 2.8 line 20
    var x = d3.scaleLinear() //create the scale
        .range([90, 810]) //output min and max
        .domain([0, 3]); //input min and max
        console.log(x)

//Example 3.2: Applying the x scale to return the circles' center x coordinates in main.js
        //Example 2.8 line 34
        .attr("cx", function(d, i){
            //use the scale generator with the index to place each circle horizontally
            return x(i);
        })

//Example 3.3: Determining maximum and minimum population values in main.js
    //above Example 2.8 line 20
    //find the minimum value of the array
    var minPop = d3.min(cityPop, function(d){
        return d.population;
    });

    //find the maximum value of the array
    var maxPop = d3.max(cityPop, function(d){
        return d.population;
    });

    //scale for circles center y coordinate
    var y = d3.scaleLinear()
        .range([440, 95])
        .domain([
            minPop,
            maxPop
        ]);

//Example 3.4: Applying the y scale to return the circles' center y coordinates in main.js
        //Example 2.8 line 38
        //.attr("cy", function(d){
            return y(d.population);
        //});

//Example 3.5: Implementing a color scale in main.js
    //above Example 2.8 line 20
    //color scale generator 
    var color = d3.scaleLinear()
        .range([
            "#FDBE85",
            "#D94701"
        ])
        .domain([
            minPop, 
            maxPop
        ]);


        //Example 3.4 line 1
        //.attr("cy", function(d){
            return y(d.population);
        //})
        //.style("fill", function(d, i){ //add a fill based on the color scale generator
            return color(d.population);
        //})
        //.style("stroke", "#000"); //black circle stroke

//Example 3.6: Creating the y axis generator in main.js
    //below Example 3.5...create y axis generator
    var yAxis = d3.axisLeft(y);

//Example 3.7: Adding the y axis in main.js
    //Example 3.6 line 1...create y axis generator
    var yAxis = d3.axisLeft(y);

    //create axis g element and add axis
    var axis = container.append("g")
        .attr("class", "axis")
        .call(yAxis);

//Example 3.8: Inverting .call(yAxis) in main.js
    //Example 3.7 line 6...create axis g element and add axis
    var axis = container.append("g")
        .attr("class", "axis");

    yAxis(axis);
//Example 3.9: Translating the axis 50 pixels right in main.js
    //Example 3.8 line 1...create axis g element and add axis
    var axis = container.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(50, 0)")
        .call(yAxis);

//Example 3.10: Styling the axis in style.css
/*.axis path,
.axis line {
    fill: none;
    stroke: black;
    stroke-width: 1px;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 0.9em;
} */

//Example 3.11: Adjusting the y scale to make the axis fill the inner rectangle
    //Example 3.3 line 12...scale for circles center y coordinate
    var y = d3.scaleLinear()
        .range([450, 50]) //was 440, 95
        .domain([0, 700000]); //was minPop, maxPop

//Example 3.12: Adding a title to the chart
    //below Example 3.9...create a text element and add the title
    var title = container.append("text")
        .attr("class", "title")
        .attr("text-anchor", "middle")
        .attr("x", 450)
        .attr("y", 30)
        .text("City Populations");


/* Example 3.13: Styling the title in style.css
.title {
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: bold;
} */

//Example 3.14: Creating circle labels in main.js
    //below Example 3.12...create circle labels
    var labels = container.selectAll(".labels")
        .data(cityPop)
        .enter()
        .append("text")
        .attr("class", "labels")
        .attr("text-anchor", "left")
        .attr("x", function(d,i){
            //horizontal position to the right of each circle
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
        })
        .attr("y", function(d){
            //vertical position centered on each circle
            return y(d.population) + 5;
        })
        .text(function(d){
            return d.city + ", Pop. " + d.population;
        });

//Example 3.15: creating <tspan> elements in main.js
    //Example 3.14 line 1...create circle labels
    var labels = container.selectAll(".labels")
        .data(cityPop)
        .enter()
        .append("text")
        .attr("class", "labels")
        .attr("text-anchor", "left")
        .attr("y", function(d){
            //vertical position centered on each circle
            return y(d.population) + 5;
        });

    //first line of label
    var nameLine = labels.append("tspan")
        .attr("class", "nameLine")
        .attr("x", function(d,i){
            //horizontal position to the right of each circle
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
        })
        .text(function(d){
            return d.city;
        });

    //second line of label
    var popLine = labels.append("tspan")
        .attr("class", "popLine")
        .attr("x", function(d,i){
            //horizontal position to the right of each circle
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
        })
        .text(function(d){
            return "Pop. " + d.population;
        });

//Example 3.16: Offsetting the second line in main.js
    //Example 3.15 line 24...second line of label
    var popLine = labels.append("tspan")
        .attr("class", "popLine")
        .attr("x", function(d,i){
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
        })
        .attr("dy", "15") //vertical offset
        .text(function(d){
            return "Pop. " + d.population;
        });

//Example 3.17: Formatting population numbers in main.js
    //create format generator
    var format = d3.format(",");

    //Example 3.16 line 1...second line of label
    var popLine = labels.append("tspan")
        .attr("class", "popLine")
        .attr("x", function(d,i){
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
        })
        .attr("dy", "15") //vertical offset
        .text(function(d){
            return "Pop. " + format(d.population); //use format generator to format numbers
        });