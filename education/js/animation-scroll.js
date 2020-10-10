window.addEventListener('scroll', scrollAppear);
function scrollAppear(){
    const appearTexts = document.querySelectorAll('.title');
    const screenPosition = window.innerHeight;

    for (let i=0; i<appearTexts.length; i++){
        const introPosition = appearTexts[i].getBoundingClientRect().top;

        if(introPosition<screenPosition){
            appearTexts[i].classList.add('appear');
        } else{
            appearTexts[i].classList.remove('appear');
        }
    }
}