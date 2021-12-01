
function refreshTime(){
    let date = new Date();

    let recupFroDate = document.getElementById('date')
    recupFroDate.innerHTML = date.toDateString()

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let secondes = date.getSeconds();

        document.getElementById('hours').innerHTML = hours;

        if(minutes < 10){
            minutes = '0' + minutes;
            document.getElementById('minutes').innerHTML = minutes;
        }else{
            document.getElementById('minutes').innerHTML = minutes;
        }

        if(secondes < 10){
            secondes = '0' + secondes;
            document.getElementById('secondes').innerHTML = secondes;
        }else{
            document.getElementById('secondes').innerHTML = secondes;
        }
}
//Temps de decalge
refreshTime()
setInterval(refreshTime,1000)