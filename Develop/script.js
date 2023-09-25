// this is my time date on top of the page
var date = dayjs();
var currentHour = date.hour()
$("#currentDay").text(date.format("dddd, MMM DD"));
// this function sets the event typed to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val()
    var hour = $(this).siblings(".hour").text()
    localStorage.setItem(hour, description)
  })
  // this function pulls the local sotorage and sets the text
  $(".saveBtn").each(function () {
    var hour = $(this).siblings(".hour").text()
    $(this).siblings(".description").val(localStorage.getItem(hour))
    var parent = $(this).parent()
    var id = parent.attr("id")
    var hour = parseInt(id.substring(5))
    // this if statement is tro decide if its past, present, or future and applyt that class
    if (currentHour < hour) {
      parent.addClass("future")
    } else if (currentHour > hour) {
      parent.addClass("past")
    } else {
      parent.addClass("present")
    }
  })
})