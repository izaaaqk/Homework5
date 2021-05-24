let $container = $(".container");

let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

let time = moment();

localStorage.key

let timeSlots = [
    '8AM',
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '3PM',
    '4PM',
    '5PM',

]


for (let i = 0; i < timeSlots.length; i++) {
    let timeEl = $('<div class="col-2">');
    timeEl.text(timeSlots[i]).addClass('col-1', 'hour', 'row' ).css('padding', 50);

    let inputEl = $('<textarea class="col-8 input-group">');
    inputEl.addClass("past")

    let saveBtn = $('<button type="button" class="btn btn-success col-2">save</button>');
        saveBtn.onclick(console.log("hi"));
    $container.append(timeEl,inputEl,saveBtn).addClass("row align-items-center");
}

