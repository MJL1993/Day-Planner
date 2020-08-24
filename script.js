var dayLabel = moment().format("dddd")
var currentTime = moment().format("LTS")
var timeValue = moment().format("LTS")
console.log(timeValue)

// Current Time Function
function runningClock() {
    setInterval(function(){
$("#currentTime").html("Current Time: " + moment().format("LTS"));
}, 1000);
}

// Current Day Function
function currentDay(){
    $("#currentDay").html("Current Day: " + dayLabel);
}

//Display current Day and make sure clock is running
currentDay()
runningClock()

// Save button function
$(".saveBtn").on("click", function(){
  $()
     var timeClicked = $(this).siblings("#time").text()
     var eventInput = $(this).siblings(".textinput").val()
         console.log(timeClicked)
         console.log(eventInput)
})



$('.row').each(function(i, obj) {
    //test
    console.log(i, obj.id)
    console.log(currentTime[0] + currentTime[1])

    var militaryTime = moment().format('HH')
    console.log(militaryTime)

    var twoDigitTime = currentTime[0] + currentTime[1]

    if (militaryTime === obj.id) {
        $(this).addClass('present');
    }

    if (militaryTime > obj.id) {
        $(this).addClass('past')
    }

    if (militaryTime < obj.id) {
        $(this).addClass('future')
    }
});

    // example:
    // let string = "cat"
    // string[0]
    // the above will return "c"