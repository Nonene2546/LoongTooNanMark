const coupDay = "22 May 2014 16:30"

dayinMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

function renderTime(){
    let currentTime = new Date()
    console.log(currentTime)
    timeCount =  currentTime - new Date(coupDay)
    timeCount = Math.floor(timeCount/1000)
    // console.info("second", timeCount % 60)
    $('.Second-text').text(timeCount % 60)
    // console.info("minute", Math.floor(timeCount/60)%60)
    $('.Minute-text').text(Math.floor(timeCount/60)%60)
    // console.info("hour", Math.floor(timeCount/3600)%60)
    $('.Hour-text').text(Math.floor(timeCount/3600)%60)
    // console.info("day", Math.floor(timeCount/3600/24)%24)
    timeCount -= 19294200
    timeCount = Math.floor(timeCount/3600/24)
    let currentMonth = 0
    let currentYear = 4
    let month = 0
    while(timeCount>0){
        month += 1
        if(currentMonth == 12){
            currentYear += 1
            currentMonth = 0
        }
        timeCount -= dayinMonth[currentMonth]
        if(currentMonth == 1 && currentYear % 4 == 0){
            --timeCount
        }
        ++currentMonth
    }
    $('.Day-text').text(timeCount + dayinMonth[currentMonth+1])
    let year = Math.floor(month/12)
    month = month % 13
    console.info("month", month)
    console.info("year", year)
    $('.Year-text').text(year+1)
    $('.Month-text').text(month)
}

$(document).ready(function(){
    renderTime();
})

setInterval(renderTime, 1000)
