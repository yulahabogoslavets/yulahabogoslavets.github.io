const filterBox = document.querySelectorAll('.example');

let filterWrap = document.getElementsByClassName('filter-wrap');

filterWrap[0].addEventListener('click', (event)=>{
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];

    filterBox.forEach((elem)=>{
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass !=='all'){
            elem.classList.add('hide');
        }
    });
});


const mainlist = document.querySelector('.filter-wrap');
const activeClass = "filter-active";

mainlist.addEventListener("click", function(event) {
    const element = event.target.closest("ul li");
    if (!element) return;

    const activeElement = element.parentElement.querySelector(".filter-active");
    activeElement && activeElement.classList.remove(activeClass);
    (element === activeElement) || element.classList.add(activeClass);
});