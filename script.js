// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function (element) {
$('#currentDay').text(dayjs().format("MM-DD-YYYY"));
$('#9').children('text area').val(localStorage.getItem('9'))
$('#10').children('text area').val(localStorage.getItem('10'))
$('#11').children('text area').val(localStorage.getItem('11'))
$('#12').children('text area').val(localStorage.getItem('12'))
$('#13').children('text area').val(localStorage.getItem('13'))
$('#14').children('text area').val(localStorage.getItem('14'))
$('#15').children('text area').val(localStorage.getItem('15'))
$('#16').children('text area').val(localStorage.getItem('16'))
$('#17').children('text area').val(localStorage.getItem('17'))
$('.time-block').each(function (element) {
    let id = $(this).attr('id');
    let storedEntry = localStorage.getItem(id);
    $(this).children('textarea').val(storedEntry);
})

$('.time-block').each(function (element) {
    let id = $(this).attr('id');
    let currentTime = dayjs().hour();
    if (currentTime == id) {
        $(this).addClass('present');
    } else if (currentTime < id) {
        $(this).addClass('future');
    } else {
        $(this).addClass('past');
    }
})

$('div.time-block').on("click", "button.saveBtn", function(event) {
    console.log ("button clicked")
    console.log($(this).siblings('textarea').val());
    console.log($(event.target).children());
})
//button.addEventListener("click", modifyText); //on the save button 

// Get current date
//var date = new Date();

// Add five days to current date
//date.setDate(date.getDate() + 5);

//console.log(date);

//var today = new Date();
//var dd = today.getDate();
// var dd = today.CurrentDay();
// var mm = today.getMonth() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd;
// }

// if (mm < 10) {
//     mm = '0' + mm;
// }
// today = mm + '-' + dd + '-' + yyyy;
// console.log(today);
// today = mm + '/' + dd + '/' + yyyy;
// console.log(today);
// today = dd + '-' + mm + '-' + yyyy;
// console.log(today);
// today = dd + '/' + mm + '/' + yyyy;
// console.log(today);




    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  //});