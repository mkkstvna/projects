function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let taskCard = document.createElement("div");
    taskCard.className = "task-card";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        taskTextSpan.classList.toggle("completed");
    };

    let taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = function () {
        taskCard.remove();
    };

    taskCard.appendChild(checkbox);
    taskCard.appendChild(taskTextSpan);
    taskCard.appendChild(deleteBtn);

    document.getElementById("taskContainer").appendChild(taskCard);
    input.value = "";
}
