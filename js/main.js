// новое Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const userInfo = document.querySelector('.user-info');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function() {
            // Переключаем класс active на меню
            navLinks.classList.toggle('active');
            // Переключаем класс active на аватаре
            userInfo.classList.toggle('active');
        });
    }
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
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});








//------   ЗАМЕТКИ   -----\\   
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

let notes = [];

function loadNotes() {
    const saved = localStorage.getItem('notes');
    if (saved) {
        notes = JSON.parse(saved);
        renderNotes();
    }
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote() {
    const noteText = prompt('Введите текст заметки:', '');
    if (noteText.trim() === '') {
        alert('Заметка не может быть пустой!');
        return;
    }
    notes.unshift({ id: Date.now(), text: noteText.trim() });
    saveNotes();
    renderNotes();
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    renderNotes();
}

function createNoteElement(note) {
    const div = document.createElement('div');
    div.className = 'note-item';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = note.text;
    
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = '✕';
    delBtn.onclick = () => deleteNote(note.id);
    
    div.appendChild(textSpan);
    div.appendChild(delBtn);
    
    return div;
}

function renderNotes() {
    notesList.innerHTML = '';
    if (notes.length === 0) {
        notesList.innerHTML = '<div class="empty-message">Заметок пока нет.</div>';
        return;
    }
    notes.forEach(note => {
        notesList.appendChild(createNoteElement(note));
    });
}

addNoteBtn.onclick = addNote;
loadNotes();



//------   СЛОВАРЬ ТЕРМИНОВ   -----\\  
const termList = document.getElementById('termList');
const addTermBtn = document.getElementById('addTermBtn');

let terms = [];

function loadTerms() {
    const saved = localStorage.getItem('dictionary_terms');
    if (saved) {
        terms = JSON.parse(saved);
        renderTerms();
    }
}

function saveTerms() {
    localStorage.setItem('dictionary_terms', JSON.stringify(terms));
}

function addTerm() {
    const termName = prompt('Введите НАЗВАНИЕ термина:', '');
    if (termName.trim() === '') {
        alert('Название термина не может быть пустым!');
        return;
    }
    
    const termDefinition = prompt('Введите ОПРЕДЕЛЕНИЕ термина:', '');
    if (termDefinition.trim() === '') {
        alert('Определение не может быть пустым!');
        return;
    }
    
    terms.unshift({
        id: Date.now(),
        name: termName.trim(),
        definition: termDefinition.trim()
    });
    
    saveTerms();
    renderTerms();
}

function deleteTerm(id, event) {
    event.stopPropagation();
    if (confirm('Удалить этот термин?')) {
        terms = terms.filter(term => term.id !== id);
        saveTerms();
        renderTerms();
    }
}

function showDefinition(term) {
    alert(`${term.name}\n\n Определение:\n${term.definition}`);
}

function createTermElement(term) {
    const span = document.createElement('span');
    span.className = 'term-tag';
    span.textContent = term.name;
    
    span.onclick = () => showDefinition(term);
    
    span.oncontextmenu = (event) => {
        event.preventDefault();
        deleteTerm(term.id, event);
    };
    
    span.title = 'Нажми — показать определение | ПКМ — удалить';
    
    return span;
}

function renderTerms() {
    termList.innerHTML = '';
    
    if (terms.length === 0) {
        termList.innerHTML = '<span class="empty-tags">Добавьте первый термин</span>';
        return;
    }

    terms.forEach(term => {
        termList.appendChild(createTermElement(term));
    });
}

addTermBtn.onclick = addTerm;
loadTerms();



//------   ПЕРЕВОДЧИК   -----\\   
function translateText() {
    const input = document.getElementById('translateInput').value.trim();
    const output = document.getElementById('translateOutput');
    if (!input) { 
        output.innerHTML = 'Введите текст для перевода'; 
        return; 
    }
    output.innerHTML = `${input} - [Перевод]`;
}