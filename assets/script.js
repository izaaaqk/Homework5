
let $container = $(".container");
let $btn = $('#btn');
let $input = $('#input');

let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

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
    const timeEl = $('<div class="col-sm-1 row time-block hour" id="time">');
    timeEl.text(timeSlots[i])

    const inputEl = $('<textarea class="col-sm-10 description">');
    inputEl.addClass("past")

    const saveBtn = $('<button class="btn saveBtn col-sm-1 fas fa-save"</i></button>');
    $container.append(timeEl,inputEl,saveBtn).addClass("row align-items-center text-center");
}


    $('.saveBtn').on('click', function () {
        let value = $(this).siblings('.description').val();
        let time = $(this).siblings('.hour').text();

        localStorage.setItem(time, value);
    });

