// Get Value
let alerm_form = document.getElementById('alerm_form')
let result = document.querySelector('.result')
let my_sound = document.getElementById('my_sound');
let stp_alrm = document.getElementById('stp_alrm');

let stInterVal;
alerm_form.onsubmit = (e) =>{
    e.preventDefault();
    clearInterval(stInterVal)
    let frm_data = new FormData(e.target);
    let {date, time} = Object.fromEntries(frm_data.entries());

     stInterVal = setInterval(()=>{
        alertnFuntion(date, time, stInterVal, result, my_sound)
    },1000)

}
stp_alrm.onclick = (e)=>{
    e.preventDefault();
    my_sound.pause();
}
