let todos = [];
let planner = {};
let goals = [];
let isDarkTheme = false;

let timerInterval = null;
let timerSeconds = 1500;
let timerRunning = false;

const FALLBACK_QUOTES = [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
    { text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" }
];

document.addEventListener("DOMContentLoaded", () => {
    initClock();
    initDynamicBg();
    initTheme();
    fetchWeather();
    loadTodos();
    loadPlanner();
    loadGoals();
    getQuote();
});

function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

    document.getElementById("live-time").innerText = timeStr;
    document.getElementById("live-date").innerText = dateStr;
}

function initDynamicBg() {
    const hour = new Date().getHours();
    document.body.classList.remove('bg-morning', 'bg-afternoon', 'bg-evening', 'bg-night');

    if (hour >= 5 && hour < 12) {
        document.body.classList.add('bg-morning');
    } else if (hour >= 12 && hour < 17) {
        document.body.classList.add('bg-afternoon');
    } else if (hour >= 17 && hour < 21) {
        document.body.classList.add('bg-evening');
    } else {
        document.body.classList.add('bg-night');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem("productivity_theme");
    if (savedTheme === "dark") {
        isDarkTheme = true;
        document.body.classList.add("dark-theme");
        document.getElementById("theme-icon").innerText = "light_mode";
    }
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark-theme", isDarkTheme);
    document.getElementById("theme-icon").innerText = isDarkTheme ? "light_mode" : "dark_mode";
    localStorage.setItem("productivity_theme", isDarkTheme ? "dark" : "light");
}

function fetchWeather() {
    const tempEl = document.getElementById("weather-temp");
    const cityEl = document.getElementById("weather-city");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
                    .then(res => res.json())
                    .then(data => {
                        if (data && data.current_weather) {
                            tempEl.innerText = `${Math.round(data.current_weather.temperature)}°C`;
                            cityEl.innerText = "Local Weather";
                        }
                    })
                    .catch(() => setFallbackWeather());
            },
            () => setFallbackWeather()
        );
    } else {
        setFallbackWeather();
    }
}

function setFallbackWeather() {
    document.getElementById("weather-temp").innerText = "24°C";
    document.getElementById("weather-city").innerText = "Sunny";
}

function showFeature(featureId) {
    document.getElementById("dashboard-grid").style.display = "none";
    document.querySelectorAll(".feature-view").forEach(el => el.style.display = "none");

    const target = document.getElementById(`view-${featureId}`);
    if (target) {
        target.style.display = "block";
    }

    if (featureId === 'planner') {
        highlightCurrentPlannerHour();
    }
}

function showDashboard() {
    document.querySelectorAll(".feature-view").forEach(el => el.style.display = "none");
    document.getElementById("dashboard-grid").style.display = "grid";
}

function loadTodos() {
    const saved = localStorage.getItem("productivity_todos");
    todos = saved ? JSON.parse(saved) : [];
    renderTodos();
}

function saveTodos() {
    localStorage.setItem("productivity_todos", JSON.stringify(todos));
}

function addTodo() {
    const input = document.getElementById("todo-input");
    const text = input.value.trim();
    if (!text) return;

    todos.unshift({
        id: Date.now().toString(),
        text: text,
        completed: false,
        important: false
    });

    input.value = "";
    saveTodos();
    renderTodos();
}

function toggleTodoComplete(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function toggleTodoImportant(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.important = !todo.important;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    todos.forEach(t => {
        const li = document.createElement("li");
        li.className = `task-item ${t.completed ? 'completed' : ''} ${t.important ? 'important' : ''}`;

        li.innerHTML = `
            <span>${escapeHtml(t.text)}</span>
            <div class="task-actions">
                <button class="btn-icon ${t.important ? 'active-star' : ''}" onclick="toggleTodoImportant('${t.id}')">
                    <span class="material-icons-outlined">star</span>
                </button>
                <button class="btn-icon" onclick="toggleTodoComplete('${t.id}')">
                    <span class="material-icons-outlined">${t.completed ? 'check_circle' : 'radio_button_unchecked'}</span>
                </button>
                <button class="btn-icon delete" onclick="deleteTodo('${t.id}')">
                    <span class="material-icons-outlined">delete_outline</span>
                </button>
            </div>
        `;
        list.appendChild(li);
    });
}

function loadPlanner() {
    const saved = localStorage.getItem("productivity_planner");
    planner = saved ? JSON.parse(saved) : {};
    renderPlanner();
}

function savePlanner() {
    localStorage.setItem("productivity_planner", JSON.stringify(planner));
}

function renderPlanner() {
    const container = document.getElementById("planner-slots");
    container.innerHTML = "";

    const hours = [
        { label: "9:00 AM", key: 9 },
        { label: "10:00 AM", key: 10 },
        { label: "11:00 AM", key: 11 },
        { label: "12:00 PM", key: 12 },
        { label: "1:00 PM", key: 13 },
        { label: "2:00 PM", key: 14 },
        { label: "3:00 PM", key: 15 },
        { label: "4:00 PM", key: 16 },
        { label: "5:00 PM", key: 17 },
        { label: "6:00 PM", key: 18 }
    ];

    const currentHour = new Date().getHours();

    hours.forEach(h => {
        const div = document.createElement("div");
        div.className = `planner-slot ${currentHour === h.key ? 'current-hour' : ''}`;

        const val = planner[h.key] || "";

        div.innerHTML = `
            <div class="slot-time">${h.label}</div>
            <input type="text" class="slot-input" placeholder="Add plan..." value="${escapeHtml(val)}" onchange="updatePlannerSlot(${h.key}, this.value)">
        `;
        container.appendChild(div);
    });
}

function updatePlannerSlot(hourKey, value) {
    planner[hourKey] = value;
    savePlanner();
}

function highlightCurrentPlannerHour() {
    renderPlanner();
}

function loadGoals() {
    const saved = localStorage.getItem("productivity_goals");
    goals = saved ? JSON.parse(saved) : [];
    renderGoals();
}

function saveGoals() {
    localStorage.setItem("productivity_goals", JSON.stringify(goals));
}

function addGoal() {
    const input = document.getElementById("goal-input");
    const text = input.value.trim();
    if (!text) return;

    goals.unshift({
        id: Date.now().toString(),
        text: text,
        completed: false
    });

    input.value = "";
    saveGoals();
    renderGoals();
}

function toggleGoal(id) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.completed = !goal.completed;
        saveGoals();
        renderGoals();
    }
}

function deleteGoal(id) {
    goals = goals.filter(g => g.id !== id);
    saveGoals();
    renderGoals();
}

function renderGoals() {
    const list = document.getElementById("goals-list");
    list.innerHTML = "";

    let completedCount = 0;

    goals.forEach(g => {
        if (g.completed) completedCount++;

        const li = document.createElement("li");
        li.className = `task-item ${g.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <span>${escapeHtml(g.text)}</span>
            <div class="task-actions">
                <button class="btn-icon" onclick="toggleGoal('${g.id}')">
                    <span class="material-icons-outlined">${g.completed ? 'check_box' : 'check_box_outline_blank'}</span>
                </button>
                <button class="btn-icon delete" onclick="deleteGoal('${g.id}')">
                    <span class="material-icons-outlined">delete_outline</span>
                </button>
            </div>
        `;
        list.appendChild(li);
    });

    const total = goals.length;
    const percent = total > 0 ? (completedCount / total) * 100 : 0;

    document.getElementById("goals-progress-text").innerText = `${completedCount} of ${total} completed`;
    document.getElementById("goals-progress-bar").style.width = `${percent}%`;
}

function toggleTimer() {
    const btn = document.getElementById("timer-toggle-btn");

    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        btn.innerText = "Start Session";
    } else {
        timerRunning = true;
        btn.innerText = "Pause";
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerRunning = false;
                btn.innerText = "Start Session";
                alert("Pomodoro Work Session Complete! Take a break.");
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 1500;
    document.getElementById("timer-toggle-btn").innerText = "Start Session";
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById("timer-display").innerText = formatted;
}

function getQuote() {
    fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(data => {
            if (data && data.quote) {
                document.getElementById("quote-text").innerText = `"${data.quote}"`;
                document.getElementById("quote-author").innerText = `- ${data.author}`;
            } else {
                setRandomFallbackQuote();
            }
        })
        .catch(() => setRandomFallbackQuote());
}

function setRandomFallbackQuote() {
    const random = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    document.getElementById("quote-text").innerText = `"${random.text}"`;
    document.getElementById("quote-author").innerText = `- ${random.author}`;
}

function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
