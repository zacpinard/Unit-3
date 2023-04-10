//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    var promises = [d3.csv("data/African_Wildlife_Data.csv"),                    
                    d3.json("data/NationalParks_polygons.topojson")                   
                    ];    
    Promise.all(promises).then(callback);

    function callback(data){    
        csvData = data[0];        
        Parks = data[1];
        console.log(csvData);
        console.log(Parks);    
    };

    //translate National Parks TopoJSON
    var nationalParks = topojson.feature(Parks, Parks.objects.NationalParks_polygons)

    console.log(nationalParks)
};