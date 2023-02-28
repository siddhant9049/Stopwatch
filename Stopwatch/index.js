
    let [hours,minutes,seconds,mseconds]=[00,00,00,00]
    let time=document.getElementById("time")
    
let lev=null


document.getElementById("start").addEventListener("click",()=>{
    if(lev!=null){
        clearInterval(lev)
    }
    lev=setInterval(timer,10)
})

document.getElementById("pause").addEventListener("click",()=>{
    clearInterval(lev)
})


document.getElementById("reset").addEventListener("click",()=>{

    clearInterval(lev)
    
    hours=00
    minutes=00
    seconds=00
    mseconds=00
    time.innerHTML=`00 : 00 : 00 : 00`
   
    
})

function timer(){
    mseconds+=10;
    if(mseconds==1000){
        mseconds=0
        seconds++
        if(seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
// let ho=0
//     if(ho<10){
//         "0"+hours
//     }
//     else{
//         hours
//     }
// let min=0
//     if(min<10){
//         "0"+minutes
//     }
//     else{
//         minutes
//     }
// let Sec=0
//     if(Sec<10){
//         "0" + seconds
//     }
//     else{
//         seconds
//     }


// let ms=0
//     if(ms<10){
//         "0"+ mseconds
//     }
//     else{
//         mseconds
//     }

    let ho= hours<10?"0"+hours:hours
    let min= minutes<10?"0"+minutes:minutes
    let Sec= seconds<10?"0"+seconds:seconds
    let ms= mseconds<10?"0"+mseconds:mseconds
    
    
   
   
    time.innerHTML=`${ho} : ${min} : ${Sec} : ${ms}`

    
    document.getElementById("cast").addEventListener("click",()=>{
        var cast=0
        setInterval(lev)
    //   for(let i=0;i<10;i++){
        cast++
        // if(cast==1){
            document.getElementById("output").innerHTML= `Cast ${cast} ` + `${ho}:${min}:${Sec}:${ms}`
            // document.getElementById("output").innerHTML[0]= `Cast ${cast} ` + `${ho}:${min}:${Sec}:${ms}`
            

    //   }
        
    })

        
}

// console.log(clearInterval())