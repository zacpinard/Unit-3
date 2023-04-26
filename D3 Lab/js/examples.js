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




//Activity 9

//Example 1.3: Loading data streams with Promise.all() in main.js
//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    var promises = [d3.csv("data/unitsData.csv"),                    
                    d3.json("data/EuropeCountries.topojson"),                    
                    d3.json("data/FranceRegions.topojson")                   
                    ];    
    Promise.all(promises).then(callback);
};

//Example 1.4: Adding a callback to setMap() in main.js
//Example 1.3 line 4...set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    var promises = [d3.csv("data/unitsData.csv"),                    
                    d3.json("data/EuropeCountries.topojson"),                    
                    d3.json("data/FranceRegions.topojson")                   
                    ];    
        Promise.all(promises).then(callback);    

        function callback(data){    
            csvData = data[0];    
            europe = data[1];    
            france = data[2];
            console.log(csvData);
            console.log(europe);
            console.log(france);    
        };
};

//Example 1.5: Converting TopoJSON to GeoJSON in main.js
function callback(data){        
    //...

//translate europe TopoJSON
var europeCountries = topojson.feature(europe, europe.objects.EuropeCountries),
    franceRegions = topojson.feature(france, france.objects.FranceRegions);

//examine the results
console.log(europeCountries);
console.log(franceRegions);
};

//Example 2.1: Creating an Albers projection generator in main.js
//Example 1.4 line 1...set up choropleth map
function setMap(){

    //map frame dimensions
    var width = 960,
        height = 460;

    //create new svg container for the map
    var map = d3.select("body")
        .append("svg")
        .attr("class", "map")
        .attr("width", width)
        .attr("height", height);

    //create Albers equal area conic projection centered on France
    var projection = d3.geoAlbers()
        .center([0, 46.2])
        .rotate([-2, 0, 0])
        .parallels([43, 62])
        .scale(2500)
        .translate([width / 2, height / 2]);

    //use Promise.all to parallelize asynchronous data loading
    var promises = [];    
    promises.push(d3.csv("data/unitsData.csv")); //load attributes from csv    
    promises.push(d3.json("data/EuropeCountries.topojson")); //load background spatial data    
    promises.push(d3.json("data/FranceRegions.topojson")); //load choropleth spatial data    
    Promise.all(promises).then(callback);
}

//Example 2.2: Creating a path generator in main.js
    //Example 2.1 line 15...create Albers equal area conic projection centered on France
    var projection = d3.geoAlbers()
        .center([0, 46.2])
        .rotate([-2, 0])
        .parallels([43, 62])
        .scale(2500)
        .translate([width / 2, height / 2]);

    var path = d3.geoPath()
        .projection(projection);

//Example 2.3: Drawing geometries from spatial data in main.js
//Example 1.5 line 1
function callback(data){               

    //...
       //translate europe TopoJSON
       var europeCountries = topojson.feature(europe, europe.objects.EuropeCountries),
           franceRegions = topojson.feature(france, france.objects.FranceRegions).features;

       //add Europe countries to map
       var countries = map.append("path")
           .datum(europeCountries)
           .attr("class", "countries")
           .attr("d", path);

       //add France regions to map
       var regions = map.selectAll(".regions")
           .data(franceRegions)
           .enter()
           .append("path")
           .attr("class", function(d){
               return "regions " + d.properties.adm1_code;
           })
           .attr("d", path);
};

/*Example 2.4: Styling country borders in style.css
.countries {
    fill: #FFF;
    stroke: #CCC;
    stroke-width: 2px;
} */

//Example 2.5: Creating a graticule generator in main.js
    //Example 2.3 line 1
    function callback(data){   

        //...

        //create graticule generator
        var graticule = d3.geoGraticule()
            .step([5, 5]); //place graticule lines every 5 degrees of longitude and latitude
    }

//Example 2.6: Drawing graticule lines in main.js
        //Example 2.5 line 3...create graticule generator
        var graticule = d3.geoGraticule()
            .step([5, 5]); //place graticule lines every 5 degrees of longitude and latitude

        //create graticule lines
        var gratLines = map.selectAll(".gratLines") //select graticule elements that will be created
            .data(graticule.lines()) //bind graticule lines to each element to be created
            .enter() //create an element for each datum
            .append("path") //append each element to the svg as a path element
            .attr("class", "gratLines") //assign class for styling
            .attr("d", path); //project graticule lines

/* Example 2.7: Graticule line styles in style.css
.gratLines {
    fill: none;
    stroke: #999;
    stroke-width: 1px;
} */

//Example 2.8: Drawing a graticule background in main.js
        //Example 2.6 line 1...create graticule generator
        var graticule = d3.geoGraticule()
            .step([5, 5]); //place graticule lines every 5 degrees of longitude and latitude

        //create graticule background
        var gratBackground = map.append("path")
            .datum(graticule.outline()) //bind graticule background
            .attr("class", "gratBackground") //assign class for styling
            .attr("d", path) //project graticule

        //Example 2.6 line 5...create graticule lines
        var gratLines = map.selectAll(".gratLines") //select graticule elements that will be created
            .data(graticule.lines()) //bind graticule lines to each element to be created
            .enter() //create an element for each datum
            .append("path") //append each element to the svg as a path element
            .attr("class", "gratLines") //assign class for styling
            .attr("d", path); //project graticule lines

/* Example 2.9: Graticule background style in style.css
.gratBackground {
    fill: #D5E3FF;
} */

/*Example 2.9: Framing the map in style.css
.map {
    border: medium solid #999;
} */

//Example 1.1: Joining CSV data to GeoJSON enumeration units in main.js
    //translate europe and France TopoJSONs
    var europeCountries = topojson.feature(europe, europe.objects.EuropeCountries),
                franceRegions = topojson.feature(france, france.objects.FranceRegions).features;

    //variables for data join
    var attrArray = ["varA", "varB", "varC", "varD", "varE"];

    //loop through csv to assign each set of csv attribute values to geojson region
    for (var i=0; i<csvData.length; i++){
        var csvRegion = csvData[i]; //the current region
        var csvKey = csvRegion.adm1_code; //the CSV primary key

        //loop through geojson regions to find correct region
        for (var a=0; a<franceRegions.length; a++){

            var geojsonProps = franceRegions[a].properties; //the current region geojson properties
            var geojsonKey = geojsonProps.adm1_code; //the geojson primary key

            //where primary keys match, transfer csv data to geojson properties object
            if (geojsonKey == csvKey){

                //assign all attributes and values
                attrArray.forEach(function(attr){
                    var val = parseFloat(csvRegion[attr]); //get csv attribute value
                    geojsonProps[attr] = val; //assign attribute and value to geojson properties
                });
            };
        };
    };

//Example 1.2: Defining attrArray and expressed as pseudo-global variables in main.js
//First line of main.js...wrap everything in a self-executing anonymous function to move to local scope
(function(){

    //pseudo-global variables
    var attrArray = ["varA", "varB", "varC", "varD", "varE"]; //list of attributes
    var expressed = attrArray[0]; //initial attribute
    
    //begin script when window loads
    window.onload = setMap();
    
    //... //the rest of the script
    
    })(); //last line of main.js


    
//Example 1.3: Subdividing the callback script into multiple functions in main.js
//set up choropleth map
function setMap(){

    //...MAP, PROJECTION, PATH, AND QUEUE BLOCKS FROM Week 8

    function callback(data){    

        var csvData = data[0], europe = data[1], france = data[2];

        //place graticule on the map
        setGraticule(map, path);

        //translate europe and France TopoJSONs
        var europeCountries = topojson.feature(europe, europe.objects.EuropeCountries),
            franceRegions = topojson.feature(france, france.objects.FranceRegions).features;

        //add Europe countries to map
        var countries = map.append("path")
            .datum(europeCountries)
            .attr("class", "countries")
            .attr("d", path);

        //join csv data to GeoJSON enumeration units
        franceRegions = joinData(franceRegions, csvData);

        //add enumeration units to the map
        setEnumerationUnits(franceRegions, map, path);
    };
}; //end of setMap()

function setGraticule(map, path){
    //...GRATICULE BLOCKS FROM Week 8
};

function joinData(franceRegions, csvData){
    //...DATA JOIN LOOPS FROM EXAMPLE 1.1

    return franceRegions;
};

function setEnumerationUnits(franceRegions, map, path){
    //...REGIONS BLOCK FROM Week 8
};

/*Unused Examples:
Example 1.4: Creating the quantile color scale generator in main.js
        //create the color scale
        var colorScale = makeColorScale(csvData);

        //Example 1.3 line 24...add enumeration units to the map
        setEnumerationUnits(franceRegions, map, path, colorScale);
    };
}; //end of setMap()

//...EXAMPLE 1.3 LINES 29-41

//function to create color scale generator
function makeColorScale(data){
    var colorClasses = [
        "#D4B9DA",
        "#C994C7",
        "#DF65B0",
        "#DD1C77",
        "#980043"
    ];

    //create color scale generator
    var colorScale = d3.scaleQuantile()
        .range(colorClasses);

    //build array of all values of the expressed attribute
    var domainArray = [];
    for (var i=0; i<data.length; i++){
        var val = parseFloat(data[i][expressed]);
        domainArray.push(val);
    };

    //assign array of expressed values as scale domain
    colorScale.domain(domainArray);

    return colorScale;
};


Example 1.5: Creating an equal interval color scale generator in main.js
//Example 1.4 line 11...function to create color scale generator
function makeColorScale(data){
    var colorClasses = [
        "#D4B9DA",
        "#C994C7",
        "#DF65B0",
        "#DD1C77",
        "#980043"
    ];

    //create color scale generator
    var colorScale = d3.scaleQuantile()
        .range(colorClasses);

    //build two-value array of minimum and maximum expressed attribute values
    var minmax = [
        d3.min(data, function(d) { return parseFloat(d[expressed]); }),
        d3.max(data, function(d) { return parseFloat(d[expressed]); })
    ];
    //assign two-value array as scale domain
    colorScale.domain(minmax);

    return colorScale;
};
*/



//Example 1.6: Creating a Natural Breaks color scale generator in main.js
//function to create color scale generator
function makeColorScale(data){
    var colorClasses = [
        "#D4B9DA",
        "#C994C7",
        "#DF65B0",
        "#DD1C77",
        "#980043"
    ];

    //create color scale generator
    var colorScale = d3.scaleThreshold()
        .range(colorClasses);

    //build array of all values of the expressed attribute
    var domainArray = [];
    for (var i=0; i<data.length; i++){
        var val = parseFloat(data[i][expressed]);
        domainArray.push(val);
    };

    //cluster data using ckmeans clustering algorithm to create natural breaks
    var clusters = ss.ckmeans(domainArray, 5);
    //reset domain array to cluster minimums
    domainArray = clusters.map(function(d){
        return d3.min(d);
    });
    //remove first value from domain array to create class breakpoints
    domainArray.shift();

    //assign array of last 4 cluster minimums as domain
    colorScale.domain(domainArray);

    return colorScale;
};

//Example 1.7: Coloring enumeration units in main.js
//Example 1.3 line 38
function setEnumerationUnits(franceRegions, map, path, colorScale){

    //add France regions to map
    var regions = map.selectAll(".regions")
        .data(franceRegions)
        .enter()
        .append("path")
        .attr("class", function(d){
            return "regions " + d.properties.adm1_code;
        })
        .attr("d", path)
        .style("fill", function(d){
            return colorScale(d.properties[expressed]);
        });
};

//Example 1.8: Checking for values when setting fill in main.js
function setEnumerationUnits(franceRegions,map,path,colorScale){    
    //add France regions to map    
    var regions = map.selectAll(".regions")        
        .data(franceRegions)        
        .enter()        
        .append("path")        
        .attr("class", function(d){            
            return "regions " + d.properties.adm1_code;        
        })        
        .attr("d", path)        
            .style("fill", function(d){            
                var value = d.properties[expressed];            
                if(value) {                
                    return colorScale(d.properties[expressed]);            
                } else {                
                    return "#ccc";            
                }    
        });
    }


/* Example 1.9: Adding a border to enumeration units in style.css
.regions {
    stroke: #000;
    stroke-width: 0.5px;
    stroke-linecap: round;
}
*/

//Example 2.1: Creating the bar chart container in main.js
        //Example 1.4 line 4...add enumeration units to the map
        setEnumerationUnits(franceRegions, map, path, colorScale);

        //add coordinated visualization to the map
        setChart(csvData, colorScale);
    //};
//}; //end of setMap()

//...

//function to create coordinated bar chart
function setChart(csvData, colorScale){
    //chart frame dimensions
    var chartWidth = 550,
        chartHeight = 460;

    //create a second svg element to hold the bar chart
    var chart = d3.select("body")
        .append("svg")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("class", "chart");
};

//Example 2.2: Setting responsive map and chart widths in main.js
//Example 1.3 line 2...set up choropleth map
function setMap(){
    //map frame dimensions
    var width = window.innerWidth * 0.5,
        height = 460;

//...
}
//Example 2.1 line 11...function to create coordinated bar chart
function setChart(csvData, colorScale){
    //chart frame dimensions
    var chartWidth = window.innerWidth * 0.425,
        chartHeight = 460;
    
//...
}

/*Example 2.3: Adding a map frame margin and chart frame styles in style.css
.map {
    border: medium solid #999;
    margin: 10px 0 0 20px;
}

.chart {
    background-color: rgba(128,128,128,.2);
    border: medium solid #999;
    float: right;
    margin: 10px 20px 0 0;
}*/

//Example 2.4: Creating bars in main.js
    //Example 2.1 line 17...create a second svg element to hold the bar chart
    var chart = d3.select("body")
        .append("svg")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("class", "chart");

    //set bars for each province
    var bars = chart.selectAll(".bars")
        .data(csvData)
        .enter()
        .append("rect")
        .attr("class", function(d){
            return "bars " + d.adm1_code;
        })
        .attr("width", chartWidth / csvData.length - 1)
        .attr("x", function(d, i){
            return i * (chartWidth / csvData.length);
        })
        .attr("height", 460)
        .attr("y", 0);

//Example 2.5: Setting the bar heights with a linear scale in main.js
    //create a scale to size bars proportionally to frame
    var yScale = d3.scaleLinear()
        .range([0, chartHeight])
        .domain([0, 105]);

    //Example 2.4 line 8...set bars for each province
    var bars = chart.selectAll(".bars")
        .data(csvData)
        .enter()
        .append("rect")
        .attr("class", function(d){
            return "bars " + d.adm1_code;
        })
        .attr("width", chartWidth / csvData.length - 1)
        .attr("x", function(d, i){
            return i * (chartWidth / csvData.length);
        })
        .attr("height", function(d){
            return yScale(parseFloat(d[expressed]));
        })
        .attr("y", function(d){
            return chartHeight - yScale(parseFloat(d[expressed]));
        })

//Example 2.6: Applying the color scale at the end of the bars block in main.js
        //Example 2.5 line 23...end of bars block
        //.style("fill", function(d){
            return colorScale(d[expressed]);
        //});

//Example 2.7: Sorting attribute values to reorder the bars in main.js
    //Example 2.5 line 6...set bars for each province
    var bars = chart.selectAll(".bars")
        .data(csvData)
        .enter()
        .append("rect")
        .sort(function(a, b){
            return a[expressed]-b[expressed]
        })
        .attr("class", function(d){
            return "bars " + d.adm1_code;
        })
        //...

//Example 2.8: Adding text to the bars in main.js
    //annotate bars with attribute value text
    var numbers = chart.selectAll(".numbers")
        .data(csvData)
        .enter()
        .append("text")
        .sort(function(a, b){
            return a[expressed]-b[expressed]
        })
        .attr("class", function(d){
            return "numbers " + d.adm1_code;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i){
            var fraction = chartWidth / csvData.length;
            return i * fraction + (fraction - 1) / 2;
        })
        .attr("y", function(d){
            return chartHeight - yScale(parseFloat(d[expressed])) + 15;
        })
        .text(function(d){
            return d[expressed];
        });

/*Example 2.9: Styling attribute value annotation in style.css
.numbers {
    fill: white;
    font-family: sans-serif;
}*/

//Example 2.10: Adding a dynamic chart title in main.js
    //below Example 2.8...create a text element for the chart title
    var chartTitle = chart.append("text")
        .attr("x", 20)
        .attr("y", 40)
        .attr("class", "chartTitle")
        .text("Number of Variable " + expressed[3] + " in each region");

/*Example 2.11: Chart title styles in style.css
.chartTitle {
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: bold;
}*/

//Example 2.8: Building a bar chart with an axis in main.js
//function to create coordinated bar chart
function setChart(csvData, colorScale){
    //chart frame dimensions
    var chartWidth = window.innerWidth * 0.425,
        chartHeight = 473,
        leftPadding = 25,
        rightPadding = 2,
        topBottomPadding = 5,
        chartInnerWidth = chartWidth - leftPadding - rightPadding,
        chartInnerHeight = chartHeight - topBottomPadding * 2,
        translate = "translate(" + leftPadding + "," + topBottomPadding + ")";

    //create a second svg element to hold the bar chart
    var chart = d3.select("body")
        .append("svg")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("class", "chart");

    //create a rectangle for chart background fill
    var chartBackground = chart.append("rect")
        .attr("class", "chartBackground")
        .attr("width", chartInnerWidth)
        .attr("height", chartInnerHeight)
        .attr("transform", translate);

    //create a scale to size bars proportionally to frame and for axis
    var yScale = d3.scaleLinear()
        .range([463, 0])
        .domain([0, 100]);

    //set bars for each province
    var bars = chart.selectAll(".bar")
        .data(csvData)
        .enter()
        .append("rect")
        .sort(function(a, b){
            return b[expressed]-a[expressed]
        })
        .attr("class", function(d){
            return "bar " + d.adm1_code;
        })
        .attr("width", chartInnerWidth / csvData.length - 1)
        .attr("x", function(d, i){
            return i * (chartInnerWidth / csvData.length) + leftPadding;
        })
        .attr("height", function(d, i){
            return 463 - yScale(parseFloat(d[expressed]));
        })
        .attr("y", function(d, i){
            return yScale(parseFloat(d[expressed])) + topBottomPadding;
        })
        .style("fill", function(d){
            return colorScale(d[expressed]);
        });

    //create a text element for the chart title
    var chartTitle = chart.append("text")
        .attr("x", 40)
        .attr("y", 40)
        .attr("class", "chartTitle")
        .text("Number of Variable " + expressed[3] + " in each region");

    //create vertical axis generator
    var yAxis = d3.axisLeft()
        .scale(yScale);

    //place axis
    var axis = chart.append("g")
        .attr("class", "axis")
        .attr("transform", translate)
        .call(yAxis);

    //create frame for chart border
    var chartFrame = chart.append("rect")
        .attr("class", "chartFrame")
        .attr("width", chartInnerWidth)
        .attr("height", chartInnerHeight)
        .attr("transform", translate);
};

/*Example 2.13: Styles for bar chart with axis in style.css
.chart {
    float: right;
    margin: 7px 20px 0 0;
}

.chartTitle {
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: bold;
}

.chartBackground {
    fill: rgba(128,128,128,.2);
}

.chartFrame {
    fill: none;
    stroke: #999;
    stroke-width: 3px;
    shape-rendering: crispEdges;
}

.axis path,
.axis line {
    fill: none;
    stroke: #999;
    stroke-width: 1px;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 0.8em;
    fill: #999;
}*/

//Example 1.1: Adding a dropdown menu in main.js
//function to create a dropdown menu for attribute selection
function createDropdown(){
    //add select element
    var dropdown = d3.select("body")
        .append("select")
        .attr("class", "dropdown");

    //add initial option
    var titleOption = dropdown.append("option")
        .attr("class", "titleOption")
        .attr("disabled", "true")
        .text("Select Attribute");

    //add attribute name options
    var attrOptions = dropdown.selectAll("attrOptions")
        .data(attrArray)
        .enter()
        .append("option")
        .attr("value", function(d){ return d })
        .text(function(d){ return d });
};

/*
Example 1.2: Styling the dropdown in style.css
.dropdown {
    position: absolute;
    top: 30px;
    left: 40px;
    z-index: 10;
    font-family: sans-serif;
    font-size: 1em;
    font-weight: bold;
    padding: 2px;
    border: 1px solid #999;
    box-shadow: 2px 2px 4px #999;
}

option {
    font-weight: normal;
}
*/

//Example 1.3: Pseudo-code for attribute change listener
// ON USER SELECTION:
// Step 1. Change the expressed attribute
// Step 2. Recreate the color scale with new class breaks
// Step 3. Recolor each enumeration unit on the map
// Step 4. Sort each bar on the bar chart
// Step 5. Resize each bar on the bar chart
// Step 6. Recolor each bar on the bar chart

//Example 1.4: Adding a change listener and handler function in main.js
//Example 1.1 line 1...function to create a dropdown menu for attribute selection
function createDropdown(csvData){
    //add select element
    var dropdown = d3.select("body")
        .append("select")
        .attr("class", "dropdown")
        .on("change", function(){
            changeAttribute(this.value, csvData)
        });

    //OPTIONS BLOCKS FROM EXAMPLE 1.1 LINES 8-19
};

//dropdown change event handler
function changeAttribute(attribute, csvData) {
    //change the expressed attribute
    expressed = attribute;

    //recreate the color scale
    var colorScale = makeColorScale(csvData);

    //recolor enumeration units
    var regions = d3.selectAll(".regions").style("fill", function (d) {
        var value = d.properties[expressed];
        if (value) {
            return colorScale(d.properties[expressed]);
        } else {
            return "#ccc";
        }
    });
}

//Example 1.5: Manipulating the chart bars on attribute change in main.js
//Example 1.4 line 14...dropdown change event handler
function changeAttribute(attribute, csvData){
    //change the expressed attribute
    expressed = attribute;

    //recreate the color scale
    var colorScale = makeColorScale(csvData);

    //recolor enumeration units
    var regions = d3.selectAll(".regions")
        .style("fill", function(d){            
            var value = d.properties[expressed];            
            if(value) {                
                return colorScale(value);            
            } else {                
                return "#ccc";            
            }    
        });
    //Sort, resize, and recolor bars
    var bars = d3.selectAll(".bar")
        //Sort bars
        .sort(function(a, b){
            return b[expressed] - a[expressed];
        })
        .attr("x", function(d, i){
            return i * (chartInnerWidth / csvData.length) + leftPadding;
        })
        //resize bars
        .attr("height", function(d, i){
            return 463 - yScale(parseFloat(d[expressed]));
        })
        .attr("y", function(d, i){
            return yScale(parseFloat(d[expressed])) + topBottomPadding;
        })
        //recolor bars
        .style("fill", function(d){            
            var value = d[expressed];            
            if(value) {                
                return colorScale(value);            
            } else {                
                return "#ccc";            
            }    
    });
};

//Example 1.6: Moving chart variables to make them pseudo-global in main.js:
//Top of main.js...wrap everything in a self-executing anonymous function to move to local scope
(function(){

    //pseudo-global variables
    var attrArray = ["varA", "varB", "varC", "varD", "varE"]; //list of attributes
    var expressed = attrArray[0]; //initial attribute
    
    //chart frame dimensions
    var chartWidth = window.innerWidth * 0.425,
        chartHeight = 473,
        leftPadding = 25,
        rightPadding = 2,
        topBottomPadding = 5,
        chartInnerWidth = chartWidth - leftPadding - rightPadding,
        chartInnerHeight = chartHeight - topBottomPadding * 2,
        translate = "translate(" + leftPadding + "," + topBottomPadding + ")";
    
    //create a scale to size bars proportionally to frame and for axis
    var yScale = d3.scaleLinear()
        .range([463, 0])
        .domain([0, 110]);
    
    //begin script when window loads
    window.onload = setMap();
    
    //...the rest of the script
})

//Example 1.7: Consolidating repetitive chart script in main.js:
    //in setChart()...set bars for each province
    var bars = chart.selectAll(".bar")
        .data(csvData)
        .enter()
        .append("rect")
        .sort(function(a, b){
            return b[expressed]-a[expressed]
        })
        .attr("class", function(d){
            return "bar " + d.adm1_code;
        })
        .attr("width", chartInnerWidth / csvData.length - 1);

    //CHARTTITLE, YAXIS, AXIS, AND CHARTFRAME BLOCKS

    //set bar positions, heights, and colors
    updateChart(bars, csvData.length, colorScale);
; //end of setChart()

    //...

    //in changeAttribute()...Example 1.5 line 15...Sort bars
    var bars = d3.selectAll(".bar")
        //Sort bars
        .sort(function(a, b){
            return b[expressed] - a[expressed];
        });

    updateChart(bars, csvData.length, colorScale);
; //end of changeAttribute()

//function to position, size, and color bars in chart
function updateChart(bars, n, colorScale){
    //position bars
    bars.attr("x", function(d, i){
            return i * (chartInnerWidth / n) + leftPadding;
        })
        //size/resize bars
        .attr("height", function(d, i){
            return 463 - yScale(parseFloat(d[expressed]));
        })
        .attr("y", function(d, i){
            return yScale(parseFloat(d[expressed])) + topBottomPadding;
        })
        //color/recolor bars
        .style("fill", function(d){            
            var value = d[expressed];            
            if(value) {                
                return colorScale(value);            
            } else {                
                return "#ccc";            
            }    
    });
};

//Example 1.8: Turning the chart title into visual feedback in main.js
    //at the bottom of updateChart()...add text to chart title
    var chartTitle = d3.select(".chartTitle")
        .text("Number of Variable " + expressed[3] + " in each region");

//Example 1.9: Implementing a choropleth transition in main.js
    //Example 1.5 line 9...recolor enumeration units
    var regions = d3.selectAll(".regions")
        .transition()
        .duration(1000)
        .style("fill", function(d){            
            var value = d.properties[expressed];            
            if(value) {                
                return colorScale(value);           
            } else {                
                return "#ccc";            
            }    
    });

//Example 1.10:

    //Example 1.7 line 22...Sort, resize, and recolor bars
    var bars = d3.selectAll(".bar")
        //Sort bars
        .sort(function(a, b){
            return b[expressed] - a[expressed];
        })
        .transition() //add animation
        .delay(function(d, i){
            return i * 20
        })
        .duration(500);

    updateChart(bars, csvData.length, colorScale);

//Example 2.1: Adding a highlight() function in main.js
//function to highlight enumeration units and bars
function highlight(props){
    //change stroke
    var selected = d3.selectAll("." + props.adm1_code)
        .style("stroke", "blue")
        .style("stroke-width", "2");
};

//Example 2.2: Adding mouseover event listeners in main.js
    //in setEnumerationUnits()...add France regions to map
    var regions = map.selectAll(".regions")
        .data(franceRegions)
        .enter()
        .append("path")
        .attr("class", function(d){
            return "regions " + d.properties.adm1_code;
        })
        .attr("d", path)
        .style("fill", function(d){            
            var value = d.properties[expressed];            
            if(value) {                
                return colorScale(value);            
            } else {                
                return "#ccc";            
            }       
         })
        .on("mouseover", function(event, d){
            highlight(d.properties);
        });

    //...

    //in setChart()...set bars for each province
    var bars = chart.selectAll(".bar")
        .data(csvData)
        .enter()
        .append("rect")
        .sort(function(a, b){
            return b[expressed]-a[expressed]
        })
        .attr("class", function(d){
            return "bar " + d.adm1_code;
        })
        .attr("width", chartInnerWidth / csvData.length - 1)
        .on("mouseover", function(event, d){
            highlight(d);
        });