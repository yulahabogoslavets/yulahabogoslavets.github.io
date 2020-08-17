cssProgress=(time)=>{
    let start = 0;
    let progressElement = document.getElementById('css-progress');
    let intervalId = setInterval(function(){
        if( start>75){
            clearInterval(intervalId);
        } else{
            progressElement.value=start;
        }
        start++;
    }, time)
}

cssProgress(100);