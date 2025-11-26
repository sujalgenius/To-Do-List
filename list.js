// ===== SIDEBAR MENU TOGGLE =====
const menuBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// ===== TO-DO LIST LOGIC =====
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("add-button");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">X</button>
    `;

    // Toggle complete
    li.addEventListener("click", function(e) {
        if (e.target.tagName !== "BUTTON") {
            li.classList.toggle("completed");
        }
    });

    // Delete
    li.querySelector(".deleteBtn").addEventListener("click", function() {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
}

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">X</button>
    `;

    // Add fade-in animation
    setTimeout(() => {
        li.classList.add("show");
    }, 10);

    // Toggle complete
    li.addEventListener("click", function(e) {
        if (e.target.tagName !== "BUTTON") {
            li.classList.toggle("completed");
        }
    });

    // Delete animation
    li.querySelector(".deleteBtn").addEventListener("click", function() {
        li.classList.add("removing"); // fade out
        setTimeout(() => li.remove(), 300); // wait for animation
    });

    taskList.appendChild(li);
    input.value = "";
}

