//timer
let deadline='2022-02-03';
function getTimeRemaining(endtime){
    let t= Date.parse(endtime)-Date.parse(new Date()),
        seconds=Math.floor((t/1000)%60),
        minutes=Math.floor((t/1000/60)%60),
        hours=Math.floor(t/(1000*60*60));
        return {
            'total':t,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
}
function setClock(id,endtime){
    let timer=document.getElementById(id),
        hours=timer.querySelector('.hours'),
        minutes=timer.querySelector('.minutes'),
        seconds=timer.querySelector('.seconds'),
        timeInterval=setInterval(updateClock,1000);

    function updateClock(){
        let t=getTimeRemaining(endtime);
        if (t.total<=0){
            clearInterval(timeInterval);
            hours.textContent='00';
            minutes.textContent='00';
            seconds.textContent='00';
        }
        else{
            if (String(t.hours).length==1){
                hours.textContent='0'+t.hours;
            }
            else{
                hours.textContent=t.hours;
            }
           if(String(t.minutes).length==1){
                    minutes.textContent='0'+t.minutes;
                }
            else{
                minutes.textContent=t.minutes;
            }
            if(String(t.seconds).length==1){
                 seconds.textContent='0'+t.seconds;
            }
             else{
                seconds.textContent=t.seconds;
            }
        } 
    } 
}
 setClock('timer',deadline);