function clickRadio(counter) {
        const radioImage = document.getElementById(`task-${counter}-tick`);
    if (radioImage) {
            const label = document.getElementById(`task-${counter}`);
            if (radioImage.style.display === 'none' || radioImage.style.display === '') {
                radioImage.style.display = 'block';
                label.classList.add('completed');
            } else {
                radioImage.style.display = 'none';
                label.classList.remove('completed');
            }
        }
}
    
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    let taskIdCounter = 0;

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    
    


    function addTask(text) {
        const li = document.createElement('li');
        taskIdCounter++;
        li.innerHTML = `
                <div style="display:flex;">
                <div id="task-${taskIdCounter}-radio" class="task-radio" onClick = "clickRadio(${taskIdCounter})" ><img src="./images/tick.jpg" id="task-${taskIdCounter}-tick" class="tick"/></div>
                <span style="margin-left:10px;" id ="task-${taskIdCounter}">${text}</span>
                </div>
                `;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

});