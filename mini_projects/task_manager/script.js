const menuBtn = document.querySelector("#menuBtn");
const sidebar = document.querySelector(".sidebar");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector("span");
const emptyImg = document.querySelector(".empty-img");
const taskList = document.querySelector(".task-list");
const emptyState = document.querySelector(".empty-state");
const submitBtn = document.querySelector("#submit");

const taskForm = document.querySelector(".task-input form");
const taskInput = document.querySelector(".task-input input");
const taskCategory = document.querySelector("#taskCategory");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

function updateUI() {
  const controls = document.querySelector(".task-controls");
  if (tasks.length === 0) {
    emptyState.style.display = "flex";
    if (controls) controls.style.display = "none";
  } else {
    emptyState.style.display = "none";
    if (controls) controls.style.display = "flex";
  }
}

menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("active");
  } else {
    sidebar.classList.toggle("collapsed");
  }
});

function updateEmptyImage() {
  emptyImg.src = document.body.classList.contains("dark")
    ? "./assets/icon_dark.svg"
    : "./assets/icon_light.svg";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  document.body.setAttribute("data-theme", "dark");
  themeIcon.textContent = "light_mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  document.body.dataset.theme = isDark ? "dark" : "light";
  
  const currentIcon = themeToggle.querySelector("span");
  const newIcon = document.createElement("span");
  newIcon.className = "material-symbols-outlined";
  newIcon.textContent = isDark ? "light_mode" : "dark_mode";
  currentIcon.replaceWith(newIcon);

  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateEmptyImage();
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskDOM(task, index) {
  const li = document.createElement("li");
  li.className = "task-item";
  li.setAttribute("data-id", task.id);
  li.setAttribute("data-status", task.completed);
  li.setAttribute("data-category", task.category);

  const label = document.createElement("label");
  label.className = "check";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.className = "task-checkbox";

  const box = document.createElement("span");
  box.className = "box";

  label.append(checkbox);
  checkbox.after(box);

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.append(document.createTextNode(task.task));

  const categoryBadge = document.createElement("span");
  categoryBadge.className = "task-category-badge";
  categoryBadge.append(document.createTextNode(task.category));

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  const editIcon = document.createElement("span");
  editIcon.className = "material-symbols-outlined";
  editIcon.append(document.createTextNode("edit"));
  editBtn.append(editIcon);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  const deleteIcon = document.createElement("span");
  deleteIcon.className = "material-symbols-outlined";
  deleteIcon.append(document.createTextNode("delete"));
  deleteBtn.append(deleteIcon);

  actions.append(editBtn, deleteBtn);
  
  li.append(label, textSpan, actions);
  actions.before(categoryBadge);

  return li;
}

function renderTasks() {
  taskList.innerHTML = "";
  const filterVal = document.querySelector("#filterCategory")?.value || "all";
  const filtered = tasks.filter(task => filterVal === "all" || task.category === filterVal);

  const fragment = document.createDocumentFragment();
  filtered.forEach((task, index) => {
    fragment.append(createTaskDOM(task, index));
  });
  taskList.append(fragment);
  updateUI();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = taskInput.value.trim().replace(/\s+/g, " ");
  if (!value) return;

  if (editIndex !== null) {
    tasks[editIndex].task = value;
    tasks[editIndex].category = taskCategory.value;
    editIndex = null;
    submitBtn.innerHTML = '<span class="material-symbols-outlined">add</span> Add';
    saveTasks();
    renderTasks();
  } else {
    const newTask = {
      id: Date.now(),
      task: value,
      completed: false,
      category: taskCategory.value,
    };

    tasks.unshift(newTask);
    saveTasks();

    const newLi = createTaskDOM(newTask, 0);
    taskList.prepend(newLi);
  }

  taskInput.value = "";
  taskCategory.value = "general";
  updateUI();
});

taskList.addEventListener("click", (e) => {
  const taskItem = e.target.closest(".task-item");
  if (!taskItem) return;

  const taskId = Number(taskItem.getAttribute("data-id"));
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index === -1) return;

  if (e.target.closest(".delete")) {
    tasks.splice(index, 1);
    saveTasks();
    taskItem.remove();
    updateUI();
    if (editIndex === index) {
      editIndex = null;
      taskInput.value = "";
      taskCategory.value = "general";
      submitBtn.innerHTML = '<span class="material-symbols-outlined">add</span> Add';
    }
    return;
  }

  if (e.target.closest(".edit")) {
    taskInput.value = tasks[index].task;
    taskCategory.value = tasks[index].category;
    taskInput.focus();
    editIndex = index;
    submitBtn.innerHTML = '<span class="material-symbols-outlined">edit</span> Update';
    return;
  }
});

taskList.addEventListener("change", (e) => {
  const checkbox = e.target.closest(".task-checkbox");
  if (!checkbox) return;

  const taskItem = checkbox.closest(".task-item");
  const taskId = Number(taskItem.getAttribute("data-id"));
  const index = tasks.findIndex((t) => t.id === taskId);

  const isChecked = checkbox.checked;
  tasks[index].completed = isChecked;

  taskItem.setAttribute("data-status", isChecked);
  if (isChecked) {
    taskItem.setAttribute("data-completed-at", Date.now());
  } else {
    if (taskItem.hasAttribute("data-completed-at")) {
      taskItem.removeAttribute("data-completed-at");
    }
  }

  saveTasks();
  renderTasks();
});

// Demonstration: input.value is a dynamic property representing the live DOM text input content.
// input.getAttribute("value") accesses the original initial HTML markup value, which remains static unless setAttribute is called.
console.log("Input dynamic value vs static attribute demonstration initiated");

const grandparent = document.querySelector(".layout");
const parentContainer = document.querySelector(".content");
const childTrigger = document.querySelector("#submit");

grandparent.addEventListener("click", () =>
  console.log("Grandparent Bubbling (Layout Level)"),
);
parentContainer.addEventListener("click", () =>
  console.log("Parent Bubbling (Content Level)"),
);
childTrigger.addEventListener("click", () =>
  console.log("Child Bubbling (Submit Button Level)"),
);

grandparent.addEventListener(
  "click",
  () => console.log("Grandparent Capturing (Layout Level)"),
  true,
);
parentContainer.addEventListener(
  "click",
  () => console.log("Parent Capturing (Content Level)"),
  true,
);
childTrigger.addEventListener(
  "click",
  () => console.log("Child Capturing (Submit Button Level)"),
  true,
);

document.querySelector("#filterCategory").addEventListener("change", renderTasks);

renderTasks();
updateUI();
updateEmptyImage();
