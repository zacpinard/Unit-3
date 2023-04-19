(function(){  //localize everything to this .js file by wrapping it in a function

//pseudo-global variables
//variables for data join
var attrArray = ["ELEPHANT", "LION", "LEOPARD", "BUFFALO", "RHINO","ID"]; //list of attributes
var expressed = attrArray[0]; //initial attribute

//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){

    //map frame dimensions
    var width = window.innerWidth * 0.5,
        height = 650;

    //create new svg container for the map
    var map = d3.select("body")
        .append("svg")
        .attr("class", "map")
        .attr("width", width)
        .attr("height", height);

    //create Albers equal area conic projection centered on Africa
    var projection = d3.geoAlbers()
        .center([0.00, 26])
        .rotate([-26.06, 39.01, 0])
        .parallels([45.00, 32.54])
        .scale(900)
        .translate([width / 2, height / 2])

    var path = d3.geoPath()
        .projection(projection);





    //use Promise.all to parallelize asynchronous data loading
    var promises = [d3.csv("data/African_Wildlife_Data.csv"),                    
                    d3.json("data/NationalParks_polygons.topojson"),
                    d3.json("data/AfricanCountries.topojson")                   
                    ];
      
    Promise.all(promises).then(callback);





    function callback(data){    
        csvData = data[0];        
        Parks = data[1];
        Land = data[2];
        //console.log(csvData);
        console.log(Parks);    


        //place graticule on the map
        setGraticule(map, path);

        //translate National Parks TopoJSON
        var africanCountries = topojson.feature(Land, Land.objects.AfricanCountries),
            nationalParks = topojson.feature(Parks, Parks.objects.NationalParks_polygons).features;
        
        //add African Land (countries) to map
        var AfricanLand = map.append("path")
            .datum(africanCountries)
            .attr("class", "countries")
            .attr("d", path);

        //join csv data to GeoJSON enumeration units
        nationalParks = joinData(nationalParks, csvData);

        var colorScale = makeColorScale(csvData);

        //add enumeration units to the map
        setEnumerationUnits(nationalParks, map, path, colorScale);

        //add coordinated visualization to the map
        setChart(csvData, colorScale);

    }
}

        
function setGraticule(map, path){
    //create graticule generator
    var graticule = d3.geoGraticule()
        .step([5, 5]); //place graticule lines every 5 degrees of longitude and latitude
    
    //create graticule background
    var gratBackground = map.append("path")
        .datum(graticule.outline()) //bind graticule background
        .attr("class", "gratBackground") //assign class for styling
        .attr("d", path) //project graticule

    //create graticule lines
    var gratLines = map.selectAll(".gratLines") //select graticule elements that will be created
        .data(graticule.lines()) //bind graticule lines to each element to be created
        .enter() //create an element for each datum
        .append("path") //append each element to the svg as a path element
        .attr("class", "gratLines") //assign class for styling
        .attr("d", path); //project graticule lines
};       

function joinData(nationalParks, csvData){
    //loop through csv to assign each set of csv attribute values to geojson region
    for (var i=0; i<csvData.length; i++){
        var csvPark = csvData[i]; //the current region
        var csvKey = csvPark.NationalPark; //the CSV primary key

        //loop through geojson regions to find correct region
        for (var a=0; a<nationalParks.length; a++){

            var geojsonProps = nationalParks[a].properties; //the current region geojson properties
            var geojsonKey = geojsonProps.NAME; //the geojson primary key

            //where primary keys match, transfer csv data to geojson properties object
            if (geojsonKey == csvKey){

                //assign all attributes and values
                attrArray.forEach(function(attr){
                    var val = parseFloat(csvPark[attr]); //get csv attribute value
                    geojsonProps[attr] = val; //assign attribute and value to geojson properties
                });
            };
        };
    };

    return nationalParks;
};

function setEnumerationUnits(nationalParks, map, path, colorScale){
    //add National Parks to map
    var parks = map.selectAll(".parks")
        .data(nationalParks)
        .enter()
        .append("path")
        .attr("class", function(d){
            console.log(d.properties)
            return "parks d" + d.properties.ID;
        })
        .attr("d", path)
        .style("fill", function(d){
            var value = d.properties[expressed];
            if(value) {                
                return colorScale(d.properties[expressed]);            
            } else {                
                return "#ACADA8";            
            }    
        });

    //console.log(africanCountries)
    console.log(nationalParks)
};

//function to create color scale generator
function makeColorScale(data){
    var colorClasses = [
        "#c7e9c0",
        "#74c476",
        "#238b45",
        "#005a32"
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
    var clusters = ss.ckmeans(domainArray, 4);

    console.log(clusters)

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

//function to create coordinated bar chart
function setChart(csvData, colorScale){
    //chart frame dimensions
    var chartWidth = window.innerWidth * 0.425,
        chartHeight = 650;
        leftPadding = 42,
        rightPadding = 10,
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

    //create a scale to size bars proportionally to frame
    var yScale = d3.scaleLinear()
        .range([chartHeight,0])
        .domain([0, 75000]);

    //set bars for each province
    var bars = chart.selectAll(".bars")
        .data(csvData)
        .enter()
        .append("rect")
        .sort(function(a, b){
            return b[expressed]-a[expressed]
        })
        .attr("class", function(d){
            return "bars d" + d.ID;
        })
        .attr("width", chartInnerWidth / csvData.length - 1)
        .attr("x", function(d, i){
            return i * (chartInnerWidth / csvData.length) + leftPadding;
        })
        .attr("height", function(d, i){
            return chartHeight - yScale(parseFloat(d[expressed]));
        })
        .attr("y", function(d, i){
            return yScale(parseFloat(d[expressed])) + topBottomPadding;
        })
        .style("fill", function(d){
            return colorScale(d[expressed]);
        });

    //annotate bars with attribute value text
    var numbers = chart.selectAll(".numbers")
        .data(csvData)
        .enter()
        .append("text")
        .sort(function(a, b){
            return b[expressed]-a[expressed]
        })
        .attr("class", function(d){
            return "numbers " + d.ID;
        })
        .attr("text-anchor", "middle")
        .attr("width", chartInnerWidth / csvData.length - 1)

        .attr("x", function(d, i){
            var fraction = chartWidth / csvData.length;
            return i * fraction + (fraction - 1) / 2;
        })
        .attr("y", function(d, i){
            return yScale(parseFloat(d[expressed])) + topBottomPadding;
        })
        .text(function(d){
            return d[expressed];
        });

    var chartTitle = chart.append("text")
        .attr("x", 50)
        .attr("y", 28)
        .attr("class", "chartTitle")
        .text("Number of " + expressed + "S in each National Park");

    //create vertical axis generator
    var yAxis = d3.axisLeft()
        .scale(yScale);

    //place axis
    var axis = chart.append("g")
        .attr("class", "axis")
        .attr("transform", translate)
        .call(yAxis);

};






})(); //finished wrapping everything