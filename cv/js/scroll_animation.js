window.addEventListener('scroll', scrollAppear);
function scrollAppear(){
    const appearTexts = document.querySelectorAll('.headline');
    const screenPosition = window.innerHeight;

    for (let i=0; i<appearTexts.length; i++){
        const introPosition = appearTexts[i].getBoundingClientRect().top;

        if(introPosition<screenPosition){
            appearTexts[i].classList.add('appear');
        } else{
            appearTexts[i].classList.remove('appear');
        }
    }
/*
    const progress = document.querySelectorAll('.progress');

    for (let i=0; i<progress.length; i++){
        const introPosition = progress[i].getBoundingClientRect().top;

        if (introPosition<screenPosition){
            progress[i].classList.add('animate');
        } else {
            progress[i].classList.remove('animate');
        }
    }*/
}


