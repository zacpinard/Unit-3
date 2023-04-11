//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){

    //map frame dimensions
    var width = 460,
        height = 650;

    //create new svg container for the map
    var map = d3.select("body")
        .append("svg")
        .attr("class", "map")
        .attr("width", width)
        .attr("height", height);

    //create Albers equal area conic projection centered on France
    var exampleAlbersProjection = d3.geoAlbers()
        .center([0, 46.2])
        .rotate([-2, 0, 0])
        .parallels([43, 62])
        .scale(2500)
        .translate([width / 2, height / 2]);

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
    promises.push(d3.csv("data/African_Wildlife_Data.csv")); //load attributes from csv    
    promises.push(d3.json("data/AfricanCountries.topojson")); //load background spatial data    
    promises.push(d3.json("data/NationalParks_polygons.topojson")); //load choropleth spatial data     
    Promise.all(promises).then(callback);

    function callback(data){    
        csvData = data[0];        
        Parks = data[1];
        Land = data[2];
        console.log(csvData);
        console.log(Parks);    

        //translate National Parks TopoJSON
        var africanCountries = topojson.feature(Land, Land.objects.AfricanCountries),
            nationalParks = topojson.feature(Parks, Parks.objects.NationalParks_polygons).features;
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

        //add Europe countries to map
        var AfricanLand = map.append("path")
            .datum(africanCountries)
            .attr("class", "countries")
            .attr("d", path);

        //add France regions to map
        var parks = map.selectAll(".parks")
            .data(nationalParks)
            .enter()
            .append("path")
            .attr("class", function(d){
                return "parks " + d.properties.NAME;
            })
            .attr("d", path);

        console.log(africanCountries)
        console.log(nationalParks)
        
    };
};