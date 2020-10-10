const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.card_descr');


draggableElements.forEach(elem=>{
    elem.addEventListener('dragstart', dragstart);
    elem.addEventListener('dragend', dragend);
});
function dragstart(event){
    event.dataTransfer.setData('text', event.target.id);
    event.target.style.opacity=0.5;
    event.target.style.borderStyle='solid';
}
function dragend(event){
    event.target.style.opacity="";
}

droppableElements.forEach(elem=>{
    elem.addEventListener('dragover', dragover);
    elem.addEventListener('drop', drop);
})

function dragover(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData('text');
    const droppableElementData = event.target.getAttribute('data-draggable-id');
    if(draggableElementData === droppableElementData){
        event.target.appendChild(document.getElementById(droppableElementData));
        event.target.classList.add('dropped');
    }
}

