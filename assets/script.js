let $container = $(".container");
let $btn = $('#btn');
let $input = $('#input');
// let $time = $('#time');


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
    const timeEl = $('<div class="col-2" id="time">');
    timeEl.text(timeSlots[i]).addClass('col-1', 'hour', 'row' ).css('padding', 50);

    const inputEl = $('<textarea name="input" class="col-8 input-group" id="input">');
    inputEl.addClass("past")

    const saveBtn = $('<button type="button" class="btn btn-success col-2" id="btn">save</button>');
    $container.append(timeEl,inputEl,saveBtn).addClass("row align-items-center");
}



function saveInput() {
    let inputSv ={
        input: $input.value.trim()
    };
    localStorage.setItem("inputSv", JSON.stringify(inputSv));
}
function renderInput(){
    let inputRen = JSON.parse(localStorage.getItem("inputSv"));
    if (inputRen !== null) {
        $input.innerHTML = inputRen.input;
    } else {
        return;
    }
}

$btn.click(function (event){
    event.preventDefault();
    saveInput();
    renderInput();
});
