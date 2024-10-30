'use strict';

const allTasks = [];
const inputTask = document.querySelector('.input-task');
const addBtn = document.querySelector('.add-task');
const taskContainer = document.querySelector('.tasks');
// Setting Date
let currId = 0;


const todayDate = new Date();
const dateText = document.querySelector('.date-text');
const options = {
    hour : 'numeric',
    minute : 'numeric',
    day : 'numeric',
    month : 'numeric',
    year : 'numeric',
    // weekday : 'long',
  }
dateText.textContent = new Intl.DateTimeFormat(navigator.language,options).format(todayDate);

const updateUI = function(tasks){
    displayMovements(tasks);
}

//************MARK**************** */
const markEvent = function(e){
    e.preventDefault();
    const taskText = this.parentElement.parentElement.firstElementChild; 
    taskText.classList.toggle('marked');
}

//*****DELETE ************** */
const deleteEvent = function(e){
    const currTask = this.parentElement.parentElement;
    currTask.classList.add('fade-out');

    currTask.addEventListener('transitionend', () => {
        currTask.remove();
    });
    console.log('Deleted task:', currTask);
}
// Setting AddBtn
const temp = function(){
    console.log(this);
}

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    const currentTask = inputTask.value;
    if(currentTask != '')
    {
        const newTask = {
            value : currentTask,
        }
        const html = `<div class="${currId++} task">
                    <p class="task-text">${newTask.value}</p>
                    <div class="icons">
                        <button class="mark-btn icon-edit icon fa-solid fa-check" aria-label="Mark as complete"></button>
                        <button class="delete-btn icon-edit icon fa-solid fa-trash" aria-label="Delete task"></button>
                    </div>
                </div>`;
        inputTask.value = '';
        taskContainer.insertAdjacentHTML('afterbegin',html);

        const markBtn = document.querySelector('.mark-btn');
        markBtn.addEventListener('click',markEvent);
        
        const deleteBtn = document.querySelector('.delete-btn');
        deleteBtn.addEventListener('click',deleteEvent);
    }
})
