let currentUser = null;
let transactions = [];
let profile = { name: "", currency: "USD" };
let isDarkMode = false;
let activeFilter = "all";
let chartInstance = null;

const CURRENCY_SYMBOLS = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    JPY: "¥"
};

document.addEventListener("DOMContentLoaded", () => {
    checkSession();

    const dateInput = document.getElementById("tx-date");
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
});

function checkSession() {
    const sessionEmail = localStorage.getItem("fintrack_session");
    if (sessionEmail) {
        const users = getUsers();
        const user = users.find(u => u.email.toLowerCase() === sessionEmail.toLowerCase());
        if (user) {
            currentUser = user;
            initUserData();
            document.getElementById("auth-view").style.display = "none";
            document.getElementById("app-view").style.display = "flex";
            showPage('dashboard');
            return;
        }
    }

    document.getElementById("auth-view").style.display = "flex";
    document.getElementById("app-view").style.display = "none";
}

function getUsers() {
    const data = localStorage.getItem("fintrack_users");
    return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
    localStorage.setItem("fintrack_users", JSON.stringify(users));
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const tabLogin = document.getElementById("tab-login");
    const tabRegister = document.getElementById("tab-register");
    const authError = document.getElementById("auth-error");

    authError.style.display = "none";

    if (tab === "login") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        tabLogin.classList.add("active");
        tabRegister.classList.remove("active");
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        tabRegister.classList.add("active");
        tabLogin.classList.remove("active");
    }
}

function showAuthError(msg) {
    const errBox = document.getElementById("auth-error");
    errBox.innerText = msg;
    errBox.style.display = "block";
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!email || !password) {
        showAuthError("Please enter email and password.");
        return;
    }

    const users = getUsers();
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!found) {
        showAuthError("Invalid email or password.");
        return;
    }

    currentUser = found;
    localStorage.setItem("fintrack_session", found.email);
    document.getElementById("login-form").reset();
    
    initUserData();
    document.getElementById("auth-view").style.display = "none";
    document.getElementById("app-view").style.display = "flex";
    showPage('dashboard');
    showToast(`Welcome back, ${currentUser.name}!`);
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const confirmPassword = document.getElementById("reg-confirm-password").value.trim();

    if (!name || !email || !password || !confirmPassword) {
        showAuthError("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        showAuthError("Passwords do not match.");
        return;
    }

    const users = getUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        showAuthError("An account with this email already exists.");
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);

    currentUser = newUser;
    localStorage.setItem("fintrack_session", email);
    document.getElementById("register-form").reset();

    initUserData();
    document.getElementById("auth-view").style.display = "none";
    document.getElementById("app-view").style.display = "flex";
    showPage('dashboard');
    showToast("Account created successfully!");
}

function initUserData() {
    if (!currentUser) return;

    const userKey = currentUser.email.toLowerCase();

    const savedTx = localStorage.getItem(`fintrack_tx_${userKey}`);
    if (savedTx) {
        transactions = JSON.parse(savedTx);
    } else {
        transactions = [];
        saveTransactions();
    }

    const savedProfile = localStorage.getItem(`fintrack_profile_${userKey}`);
    if (savedProfile) {
        profile = JSON.parse(savedProfile);
    } else {
        profile = { name: currentUser.name, currency: "USD" };
        saveProfile();
    }

    const savedTheme = localStorage.getItem(`fintrack_theme_${userKey}`);
    if (savedTheme !== null) {
        isDarkMode = JSON.parse(savedTheme);
    } else {
        isDarkMode = false;
    }

    applyTheme();
    renderProfile();
    refreshApp();
}

function saveTransactions() {
    if (!currentUser) return;
    localStorage.setItem(`fintrack_tx_${currentUser.email.toLowerCase()}`, JSON.stringify(transactions));
}

function saveProfile() {
    if (!currentUser) return;
    localStorage.setItem(`fintrack_profile_${currentUser.email.toLowerCase()}`, JSON.stringify(profile));
}

function saveTheme() {
    if (!currentUser) return;
    localStorage.setItem(`fintrack_theme_${currentUser.email.toLowerCase()}`, JSON.stringify(isDarkMode));
}

function handleLogout() {
    if (confirm("Log out of FinTrack Pro?")) {
        localStorage.removeItem("fintrack_session");
        currentUser = null;
        transactions = [];
        document.getElementById("app-view").style.display = "none";
        document.getElementById("auth-view").style.display = "flex";
        switchAuthTab("login");
        showToast("Logged out successfully");
    }
}

function showPage(pageId) {
    document.getElementById("page-dashboard").style.display = pageId === 'dashboard' ? 'block' : 'none';
    document.getElementById("page-settings").style.display = pageId === 'settings' ? 'block' : 'none';

    document.getElementById("nav-dashboard").classList.toggle("active", pageId === 'dashboard');
    document.getElementById("nav-settings").classList.toggle("active", pageId === 'settings');
}

function formatMoney(amount) {
    const symbol = CURRENCY_SYMBOLS[profile.currency] || "$";
    const formattedNum = Math.abs(amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `${symbol}${formattedNum}`;
}

function refreshApp() {
    updateCards();
    renderTable();
    renderChart();
}

function updateCards() {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(t => {
        const amt = parseFloat(t.amount) || 0;
        if (t.type === "Income") {
            totalIncome += amt;
        } else if (t.type === "Expense") {
            totalExpense += amt;
        }
    });

    const currentBalance = totalIncome - totalExpense;

    document.getElementById("card-balance").innerText = formatMoney(currentBalance);
    document.getElementById("card-income").innerText = formatMoney(totalIncome);
    document.getElementById("card-expense").innerText = formatMoney(totalExpense);
    document.getElementById("card-transactions-count").innerText = transactions.length;
}

function setFilter(filterType, btnEl) {
    activeFilter = filterType;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btnEl.classList.add("active");
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById("tx-table-body");
    const emptyState = document.getElementById("empty-state");
    const searchQuery = (document.getElementById("tx-search").value || "").toLowerCase().trim();

    tbody.innerHTML = "";

    const filtered = transactions.filter(t => {
        const matchesFilter = activeFilter === "all" || t.type.toLowerCase() === activeFilter.toLowerCase();
        const matchesSearch = t.description.toLowerCase().includes(searchQuery) || t.category.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        emptyState.style.display = "block";
        return;
    } else {
        emptyState.style.display = "none";
    }

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered.forEach(t => {
        const tr = document.createElement("tr");

        const isIncome = t.type === "Income";
        const amountSign = isIncome ? "+" : "-";
        const amountClass = isIncome ? "income" : "expense";

        tr.innerHTML = `
            <td>${t.date}</td>
            <td style="font-weight: 500;">${escapeHtml(t.description)}</td>
            <td><span class="cat-badge">${escapeHtml(t.category)}</span></td>
            <td class="tx-amount ${amountClass}">${amountSign}${formatMoney(t.amount)}</td>
            <td>
                <div class="action-btns">
                    <button class="btn-icon-action" title="Edit" onclick="editTransaction('${t.id}')">
                        <span class="material-icons-outlined" style="font-size: 18px;">edit</span>
                    </button>
                    <button class="btn-icon-action delete" title="Delete" onclick="deleteTransaction('${t.id}')">
                        <span class="material-icons-outlined" style="font-size: 18px;">delete_outline</span>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderChart() {
    const canvas = document.getElementById("cashFlowChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (chartInstance) {
        chartInstance.destroy();
    }

    const dateMap = {};
    transactions.forEach(t => {
        if (!dateMap[t.date]) {
            dateMap[t.date] = { income: 0, expense: 0 };
        }
        const amt = parseFloat(t.amount) || 0;
        if (t.type === "Income") {
            dateMap[t.date].income += amt;
        } else {
            dateMap[t.date].expense += amt;
        }
    });

    const sortedDates = Object.keys(dateMap).sort((a, b) => new Date(a) - new Date(b));
    const incomeData = sortedDates.map(d => dateMap[d].income);
    const expenseData = sortedDates.map(d => dateMap[d].expense);

    const gridColor = isDarkMode ? "#374151" : "#f1f5f9";
    const textColor = isDarkMode ? "#9ca3af" : "#64748b";

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedDates.length > 0 ? sortedDates : ['Income vs Expenses'],
            datasets: [
                {
                    label: 'Income',
                    data: sortedDates.length > 0 ? incomeData : [0],
                    backgroundColor: '#16a34a',
                    borderRadius: 4
                },
                {
                    label: 'Expenses',
                    data: sortedDates.length > 0 ? expenseData : [0],
                    backgroundColor: '#dc2626',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: textColor,
                        font: { family: 'Inter', size: 12 }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: gridColor },
                    ticks: { color: textColor, font: { family: 'Inter' } }
                },
                y: {
                    grid: { color: gridColor },
                    ticks: { color: textColor, font: { family: 'Inter' } }
                }
            }
        }
    });
}

function openTxModal(editId = null) {
    const modal = document.getElementById("tx-modal");
    const form = document.getElementById("tx-form");
    form.reset();

    if (editId) {
        const tx = transactions.find(t => t.id === editId);
        if (tx) {
            document.getElementById("modal-title").innerText = "Edit Transaction";
            document.getElementById("tx-id").value = tx.id;
            document.getElementById("tx-type").value = tx.type;
            document.getElementById("tx-description").value = tx.description;
            document.getElementById("tx-amount").value = tx.amount;
            document.getElementById("tx-date").value = tx.date;
            document.getElementById("tx-category").value = tx.category;
        }
    } else {
        document.getElementById("modal-title").innerText = "Add Transaction";
        document.getElementById("tx-id").value = "";
        document.getElementById("tx-date").value = new Date().toISOString().split('T')[0];
    }

    modal.classList.add("active");
}

function closeTxModal() {
    document.getElementById("tx-modal").classList.remove("active");
}

function handleTxSubmit(e) {
    e.preventDefault();

    const txId = document.getElementById("tx-id").value;
    const type = document.getElementById("tx-type").value;
    const description = document.getElementById("tx-description").value.trim();
    const amount = parseFloat(document.getElementById("tx-amount").value);
    const date = document.getElementById("tx-date").value;
    const category = document.getElementById("tx-category").value;

    if (!type || !description || isNaN(amount) || !date || !category) {
        alert("Please fill in all fields correctly.");
        return;
    }

    if (txId) {
        const index = transactions.findIndex(t => t.id === txId);
        if (index !== -1) {
            transactions[index] = { id: txId, type, description, amount, date, category };
        }
    } else {
        const newTx = {
            id: Date.now().toString(),
            type,
            description,
            amount,
            date,
            category
        };
        transactions.unshift(newTx);
    }

    saveTransactions();
    closeTxModal();
    refreshApp();
    showToast(txId ? "Transaction updated!" : "Transaction added!");
}

function editTransaction(id) {
    openTxModal(id);
}

function deleteTransaction(id) {
    if (confirm("Are you sure you want to delete this transaction?")) {
        transactions = transactions.filter(t => t.id !== id);
        saveTransactions();
        refreshApp();
        showToast("Transaction deleted!");
    }
}

function renderProfile() {
    const userDisplayName = profile.name || (currentUser ? currentUser.name : "User");
    document.getElementById("display-user-name").innerText = userDisplayName;
    document.getElementById("settings-name").value = userDisplayName;
    document.getElementById("settings-currency").value = profile.currency || "USD";
}

function saveSettings(e) {
    e.preventDefault();
    const name = document.getElementById("settings-name").value.trim();
    const currency = document.getElementById("settings-currency").value;

    profile.name = name || (currentUser ? currentUser.name : "User");
    profile.currency = currency;

    if (currentUser) {
        currentUser.name = profile.name;
        const users = getUsers();
        const uIdx = users.findIndex(u => u.email.toLowerCase() === currentUser.email.toLowerCase());
        if (uIdx !== -1) {
            users[uIdx].name = profile.name;
            saveUsers(users);
        }
    }

    saveProfile();
    renderProfile();
    refreshApp();
    showToast("Settings saved successfully!");
}

function toggleDarkMode(checked) {
    isDarkMode = checked;
    saveTheme();
    applyTheme();
    renderChart();
}

function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    document.getElementById("theme-toggle").checked = isDarkMode;
}

function resetAllData() {
    if (confirm("Are you sure you want to wipe all your transaction records? This action cannot be undone.")) {
        transactions = [];
        saveTransactions();
        refreshApp();
        showToast("All data has been reset.");
    }
}

function exportCSV() {
    if (transactions.length === 0) {
        alert("No transactions to export.");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,ID,Date,Type,Description,Category,Amount\n";
    transactions.forEach(t => {
        const row = `"${t.id}","${t.date}","${t.type}","${t.description.replace(/"/g, '""')}","${t.category}","${t.amount}"`;
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `FinTrack_Transactions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
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
