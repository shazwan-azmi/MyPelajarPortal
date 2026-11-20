function switchTab(tab) {
    const tabLogin = document.getElementById('tabLogin');
    const tabRegister = document.getElementById('tabRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.classList.add('hidden');

    if (tab === 'login') {
        tabLogin.className = "flex-1 py-2.5 text-xs font-bold uppercase rounded-xl bg-gradient-to-r from-uitmgold to-amber-400 text-darkbase shadow-lg transition-all";
        tabRegister.className = "flex-1 py-2.5 text-xs font-bold uppercase rounded-xl text-slate-400 hover:text-white transition-all";
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        tabRegister.className = "flex-1 py-2.5 text-xs font-bold uppercase rounded-xl bg-gradient-to-r from-uitmgold to-amber-400 text-darkbase shadow-lg transition-all";
        tabLogin.className = "flex-1 py-2.5 text-xs font-bold uppercase rounded-xl text-slate-400 hover:text-white transition-all";
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

const loginForm = document.getElementById('loginForm');
const alertMessage = document.getElementById('alertMessage');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUser').value.trim();
        const password = document.getElementById('loginPass').value;

        if ((username === 'admin' && password === 'admin123') || username === '2026112309') {
            localStorage.setItem('currentUser', 'Muhammad Shazwan Bin Azmi');
            window.location.href = 'dashboard.html';
            return;
        }

        let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        let foundUser = users.find(u => u.username === username && u.password === password);

        if (foundUser) {
            localStorage.setItem('currentUser', foundUser.name);
            window.location.href = 'dashboard.html';
        } else {
            alertMessage.className = "bg-red-500/90 text-white px-4 py-3 rounded-xl mb-6 text-xs text-center font-semibold shadow-lg";
            alertMessage.innerText = "⚠️ ID Pengguna atau Kata Laluan salah!";
            alertMessage.classList.remove('hidden');
        }
    });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const username = document.getElementById('regUser').value.trim();
        const password = document.getElementById('regPass').value;

        let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        users.push({ name: name, username: username, password: password });
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        alertMessage.className = "bg-green-500/90 text-white px-4 py-3 rounded-xl mb-6 text-xs text-center font-semibold shadow-lg";
        alertMessage.innerText = `✨ Pendaftaran berjaya untuk ${name}! Sila log masuk.`;
        alertMessage.classList.remove('hidden');
        registerForm.reset();
        setTimeout(() => switchTab('login'), 2000);
    });
}