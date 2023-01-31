var currentdayEl = $('#currentDay');
function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    currentdayEl.text(rightNow);
}










setInterval(displayTime, 1000)

