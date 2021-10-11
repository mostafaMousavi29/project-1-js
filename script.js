let startbox = document.querySelector(".start-box")
let inputcounter = startbox.querySelector ("#input-counter");
let startcounter = startbox.querySelector("#start-counter");
let errorElement = document.querySelector("#error-message");
let timecer = document.querySelector(".c100")
let timernum = document.querySelector(".c100 > span ")
let success = document.querySelector(".success")
let loading = document.querySelector(".loading")
startcounter.addEventListener("click", function(e){

let seconds = parseInt(inputcounter.value)

    if(isNaN(seconds)){
        errorElement.textContent  = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active') 
        return;
    }
        errorElement.classList.remove('active')
        timecer.style.display = 'block';
        startbox.style.display = 'none'; 
        timernum.textContent = seconds;
        success.style.display ='none' 
        loading.style.display = 'block' 

        
        let orginalsecond = seconds
        let lastpercent = ''
        let time=setInterval(() => {
            if(lastpercent) timecer.classList.remove(lastpercent)
           
            if (seconds<= 1 ){
                clearInterval (time);
                startbox.style.display ="block" 
                timecer.style.display = "none"
                inputcounter.value = "" 
                success.style.display ='block' 
                loading.style.display = 'none'
               // timecer.classList.remove(lastpercent)
                return;
            }
        
                
            seconds-= 1
            //let percent = Math.floor(((orginalsecond - seconds) / orginalsecond) *100)
            let percent = Math.abs(Math.floor((((orginalsecond - seconds) / orginalsecond) *100)-100))
            lastpercent = `p${percent}`;
            timecer.classList.add(`p${percent}`)
            timernum.textContent = seconds 
        }, 1000);

})