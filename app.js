const indicator = document.querySelector('#indicator');
const resetBtn = document.querySelector('#reset');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
let defold = 0;
let calc = 0;
let call = 0;



plusBtn.onclick = () => {
calc ++
    indicator.textContent = calc;
    if (calc  > 0) {
        indicator.style.color = 'green';
    }
}

minusBtn.onclick = () => {
    call --
    indicator.textContent = call;
    if (call < 0) {
        indicator.style.color = 'red';
    }
}
resetBtn.onclick = () => {
    indicator.innerHTML = '';
    call = 0
    calc = 0
}