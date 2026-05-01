




































// Мобильное меню
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (navLinks && navButtons) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            navButtons.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navButtons.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid var(--border)';
            
            navButtons.style.position = 'absolute';
            navButtons.style.top = '280px';
            navButtons.style.left = '0';
            navButtons.style.right = '0';
            navButtons.style.background = 'white';
            navButtons.style.padding = '20px';
            navButtons.style.borderBottom = '1px solid var(--border)';
            navButtons.style.justifyContent = 'center';
        }
    }
});

// новое мобильное меню
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.nav-buttons').classList.toggle('active');
});



// FAQ аккордеон
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        faqItem.classList.toggle('active');
    });
});




// Анимация при скролле
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});


// Функции для страницы урока
function runCode() {
    const output = document.getElementById('code-output');
    if (output) {
        output.innerHTML = '<p>🔄 Компиляция...</p>';
        
        setTimeout(() => {
            output.innerHTML = '<p>✅ Код выполнен успешно!<br>Вывод: память выделена и освобождена автоматически</p>';
        }, 1500);
    }
}

function checkCode() {
    const output = document.getElementById('code-output');
    if (output) {
        output.innerHTML = '<p>🔍 Проверяю код...</p>';
        
        setTimeout(() => {
            output.innerHTML = '<p>✅ Ошибок не найдено. Отличная работа!<br>💡 Совет: попробуй использовать make_unique для создания умного указателя.</p>';
        }, 1500);
    }
}

function uploadFile() {
    alert('Функция загрузки файлов будет доступна в ближайшее время');
}

function copyCode() {
    const code = document.querySelector('.code-example code');
    if (code) {
        navigator.clipboard?.writeText(code.textContent);
        alert('Код скопирован!');
    }
}

function notifyReady() {
    alert('✅ ИИ-преподаватель получил уведомление. Продолжим, как только ты будешь готов!');
}

function askQuestion() {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        chatMessages.innerHTML += `
            <div class="message user">
                <div class="message-avatar"><i class="fas fa-user"></i></div>
                <div class="message-content">У меня вопрос по текущей теме</div>
            </div>
        `;
        
        setTimeout(() => {
            chatMessages.innerHTML += `
                <div class="message ai">
                    <div class="message-avatar"><i class="fas fa-robot"></i></div>
                    <div class="message-content">Конечно, задавай вопрос. Что именно непонятно?</div>
                </div>
            `;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

function translateMessage() {
    alert('Переводчик будет доступен в следующем обновлении');
}

function addNote() {
    alert('Заметка добавлена в твой личный блокнот');
}

// Сохранение прогресса
function saveProgress(module, lesson, progress) {
    localStorage.setItem(`progress_${module}_${lesson}`, progress);
    console.log('Прогресс сохранен');
}

// Автосохранение кода
setInterval(() => {
    const editor = document.getElementById('code-editor');
    if (editor && editor.value) {
        localStorage.setItem('lastCode', editor.value);
    }
}, 10000);

// Восстановление кода при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('code-editor');
    const savedCode = localStorage.getItem('lastCode');
    if (editor && savedCode) {
        editor.value = savedCode;
    }
    
    // Анимация печатания в чате
    const typingIndicator = document.querySelector('.message.typing');
    if (typingIndicator) {
        setTimeout(() => {
            const chatMessages = document.querySelector('.chat-messages');
            if (chatMessages) {
                typingIndicator.remove();
                chatMessages.innerHTML += `
                    <div class="message ai">
                        <div class="message-avatar"><i class="fas fa-robot"></i></div>
                        <div class="message-content">Отлично! Давай определим твой уровень. Расскажи, что уже знаешь о C++?</div>
                    </div>
                `;
            }
        }, 2000);
    }
});