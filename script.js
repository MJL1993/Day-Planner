var dayLabel = moment().format("dddd")
var currentTime = moment().format("LTS")
var timeValue = moment().format("LTS")
console.log(timeValue)

// Function to update the time
function runningClock() {
    setInterval(function(){
$("#currentTime").html(moment().format("LTS"));
}, 1000);
}

// Function to update the day
function currentDay(){
    $("#currentDay").html(dayLabel);
}

// Save button function
$(".saveBtn").on("click", function(){
  $()
     var timeClicked = $(this).siblings("#time").text()
     var eventInput = $(this).siblings(".textinput").val()
         console.log(timeClicked)
         console.log(eventInput)
})

//Display current Day and make sure clock is running
currentDay()
runningClock()