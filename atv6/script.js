const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    
    const li = document.createElement('li');

    
    const span = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check-task';

    
    const textNode = document.createTextNode(taskText);

    
    span.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(textNode);

    
    taskList.appendChild(li);

    
    taskInput.value = '';
    taskInput.focus();
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


taskList.addEventListener('click', function(event) {
    
    
    if (event.target.classList.contains('check-task')) {
        const liItem = event.target.closest('li'); 
        liItem.classList.toggle('completed'); 
        
       
        return; 
    }

    
    const clickedLi = event.target.closest('li');
    if (clickedLi) {
        clickedLi.remove();
    }
});