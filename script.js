// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log(dayjs());
let currentHour= dayjs().hour();
console.log(currentHour);
//let convertedHour = currentHour.dayjs().format('h');
//console.log(convertedHour);
//let hourMilitary = dayjs().hour().format('hh: mm a');
//let hourTwelve = hourMilitary.format('h:mm A');
//console.log(hourTwelve);
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    console.log('save clicked');
    console.log($(this));
    console.log($(this).parent());
    let hourID = $(this).parent().attr('id');
    console.log(hourID);
    //the above selects the time-block div
    console.log($(this).siblings('.description'));
    let userEntry = $(this).siblings('.description').val();
    console.log(userEntry);
    localStorage.setItem(hourID, userEntry);
  });
  
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for(i = 0; i < 9; i++) {
    $('.time-block').each(function (){
      //let splithourID = $(this).attr('id').split('');
      //let timeblockHour = parseInt(splithourID);
      //console.log("parsed hour:" + timeblockHour);
      let timeblockHour = $(this).attr('id').replace(/\D/g,'');
      console.log(timeblockHour);
      //this takes the number from the hour ID, now used below to conditonally add classes to past, present,future
      if (timeblockHour > currentHour) {
        $(this).addClass('future');
      } else if (timeblockHour < currentHour){
        $(this).removeClass('future');
        $(this).addClass('past');
      } else {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
      }
    })
  };
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  // TODO: Add code to display' the current date in the header of the page.
  let today = dayjs().format('MMM D, YYYY hh:mm a');
  $('#currentDay').text(today);
});
