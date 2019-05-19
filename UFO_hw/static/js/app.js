
// YOUR CODE HERE!
// assign the data from data.js to a descriptive variable 

var newentry= {
  datetime: "1/28/1996",
  city: "dallas",
  state: "tx",
  country: "us",
  shape: "star",
  durationMinutes: "5 mins.",
  comments: "Cowboys win a superbowl, that's alien!."
  };
  data.splice(2,0,newentry);
  console.log(data.join());

var table=data;
var tbody =d3.select("tbody");
table.forEach((x) => {
        
  var row = tbody.append("tr");
  // Get the entries for each row in the array
  Object.values(x).forEach((value) => {
  
    // Log value into the cell
    row.append("td").text(value);
  });
    });

//select the input and button;
var button = d3.select("#filter-btn");
//var inputField = d3.select("#input");

//inputField.on("change", function() {
  //var newText = d3.event.target.value;
  //console.log(newText);
//});
// function for button to work
button.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();


// Select the input element and get the raw HTML node
  var inputElement = d3.select("#input");

// Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  //inputElement.on("change", function() {
    //var newText = d3.event.target.value;
    //console.log(newText);
  //});


  var filteredData = table.filter(entry => entry.datetime === inputValue);
  //var filteredState= filteredData.filter(entry => entry.state === inputvalueS);
  console.log(filteredData);
  //console.log(filteredState);

  var results= filteredData;
  console.log(results);

  var tbody =d3.select("tbody");
// write a table function

  tbody.html("");


//function createRows(){
  
  results.forEach((x) => {
        
    var row = tbody.append("tr");
    // Get the entries for each row in the array
    Object.values(x).forEach((value) => {
    
      // Log value into the cell
      row.append("td").text(value);
    });
      });
   
});
// function to handle input change 

// function to filter data by date 

//create varibale for tableData


//create variable for table body




