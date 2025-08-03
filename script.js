document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addButton.addEventListener("click", addTask);

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = ""; 

        addButton.addEventListener("click", addTask);
        taskInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTask();
            }
        });
    }

        document.addEventListener("click", function(event) {
            if (event.target === addButton) {
                addTask();
            }
        });
    });