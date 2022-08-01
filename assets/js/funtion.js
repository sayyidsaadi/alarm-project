/**
 * Alerm Clock Funtion
 */
const alertnFuntion = (date, time, stInterVal, result, my_sound)=>{
    // //Get form Val
    // let frm_data = new FormData(e.target);
    // let {date, time} = Object.fromEntries(frm_data.entries());

    // Get Time 
    let start_time = Date.now();
    let end_time = new Date(date + ' '+ time);
    let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));
    
    let total_sec = Math.floor(order_time / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hours = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hours / 24);

    // Get Real Time
    let hours = total_hours - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60 ); 
    
    if(total_sec <= 0){
        clearInterval(stInterVal)
        my_sound.play();
    }
    result.innerHTML = `
            <ul>
            <li>
                <h3>${total_day}</h3>
                <span>Day</span>
            </li>
            <li>
                <h3>${hours}</h3>
                <span>Hours</span>
            </li>
            <li>
                <h3>${min}</h3>
                <span>Min</span>
            </li>
            <li>
                <h3>${sec}</h3>
                <span>Sec</span>
            </li>
        </ul>
    
    
    
    `

}