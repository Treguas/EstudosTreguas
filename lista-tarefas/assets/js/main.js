const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const task = document.querySelector('.task');

btnTask.addEventListener('click', function() {
    if (!inputTask.value) {
        alert('Digite uma Tarefa');
    }

    createTask(inputTask.value);
});

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) {
            alert('Digite uma Tarefa');
        }
        createTask(inputTask.value);
    }

});

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(textInput) {
    const li = createLi();
    li.innerHTML = textInput;
    task.appendChild(li);
    clearInput();
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}