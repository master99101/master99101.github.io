document.addEventListener('DOMContentLoaded', () => {
    const domainInput = document.querySelector('.search-bar input[type="text"]');
    const checkDomainButton = document.getElementById('check-domain-button');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const languageLinks = document.querySelectorAll('.language-switch a');
    const authLinks = document.querySelectorAll('.language-auth a');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Изначально кнопка "Проверить" затемнена
    checkDomainButton.disabled = true;
    checkDomainButton.style.backgroundColor = '#ddd';
    checkDomainButton.style.color = '#333';

    // Следим за вводом в поле доменного имени
    domainInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            checkDomainButton.disabled = false;
            checkDomainButton.style.backgroundColor = '#333';
            checkDomainButton.style.color = '#fff';
        } else {
            checkDomainButton.disabled = true;
            checkDomainButton.style.backgroundColor = '#ddd';
            checkDomainButton.style.color = '#333';
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Сброс активного состояния у всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Скрытие всех содержимых табов
            tabContents.forEach(content => content.style.display = 'none');

            // Установка активного состояния для нажатой кнопки
            button.classList.add('active');
            // Отображение соответствующего содержимого таба
            const tabId = button.dataset.tab;
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Переключение языка
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            languageLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Переключение Вход/Регистрация
    authLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            authLinks.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });
    });

/*тема */
document.getElementById('theme-toggle').onclick = function() {
    // Проверить текущую тему
    if (document.body.classList.contains('dark')) {
        // Переключить на светлую тему
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        // Изменить иконку на night.png
        var themeIcon = document.getElementById('theme-icon');
        themeIcon.src = 'night.png';
    } else {
        // Переключить на тёмную тему
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        // Изменить иконку на sun.png
        var themeIcon = document.getElementById('theme-icon');
        themeIcon.src = 'sun.png';
    }
};
// Функция для установки куки
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения куки
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Проверка куки при загрузке страницы
window.onload = function() {
    var theme = getCookie('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        document.getElementById('theme-icon').src = 'sun.png';
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        document.getElementById('theme-icon').src = 'night.png';
    }
};

// Обработчик клика для переключения темы
document.getElementById('theme-toggle').onclick = function() {
    // Проверить текущую тему
    if (document.body.classList.contains('dark')) {
        // Переключить на светлую тему
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        // Изменить иконку на night.png
        var themeIcon = document.getElementById('theme-icon');
        themeIcon.src = 'night.png';
        // Установить куки
        setCookie('theme', 'light', 7); // Кука будет действовать 7 дней
    } else {
        // Переключить на тёмную тему
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        // Изменить иконку на sun.png
        var themeIcon = document.getElementById('theme-icon');
        themeIcon.src = 'sun.png';
        // Установить куки
        setCookie('theme', 'dark', 7); // Кука будет действовать 7 дней
    }
};

document.getElementById('check-domain-button').addEventListener('click', search);
document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        search();
        e.preventDefault();
    }
});

function search() {
    const input = document.querySelector('.search-bar input').value.toLowerCase().trim();
    const targetPage = {
        'python': 'PROJECT.html',
        'c++': 'PROJECT2.html',
        'c': 'PROJECT3.html',
        'c#': 'PROJECT4.html',
        'java': 'PROJEKT5.html',
        'javascript': 'Js0.html',
        'ruby': 'Ruby0.html',
        'php': 'Php0.html',
        'swift': 'Swift0.html',
        'go': 'Go0.html',
        'kotlin': 'Kotlin0.html',
        'bash': 'bash0.html',
        'shell': 'shell0.html',
        'sql': 'sql0.html',
        'typescript': 'typeScript0.html',
        'visualbasic': 'visualBasic0.html'
    };


    const aliases = {
        'python': ['питон', 'питончик'],
        'c++': ['с++', 'сиплюсплюс', 'cplusplus', 'c++'],
        'c': ['си', 'clang', 'c', 'с'],
        'c#': ['сишарп', 'sharp', 'c#', 'с#'],
        'java': ['жава', 'жаба', 'java'],
        'javascript': ['js', 'жабаскрипт', 'жаваскрипт'],
        'ruby': ['руби', 'рубин'],
        'php': ['пхп'],
        'swift': ['сфивт', 'свифт'],
        'go': ['го', 'golang', 'голанг', 'гоу'],
        'kotlin': ['котлин', 'колтин', 'котл'],
        'bash': ['баш'],
        'shell': ['шелл', 'шэлл', 'шел', 'шэл'],
        'sql': ['скл', 'скьюэль', 'скюэль'],
        'typescript': ['тупоскрипт', 'тупескрипт', 'тс'],
        'visualbasic': ['бейсик', 'вс', 'визуалбейсик', 'вб']
    };


    let found = false;
    Object.keys(targetPage).forEach(lang => {
        if (input === lang || aliases[lang].includes(input)) {
            found = true;
            setTimeout(() => {
                window.location.href = targetPage[lang];
            }, 230);
        }
    });

    if (!found) {
        const errorMessage = document.querySelector('.search-bar .error-message');
        errorMessage.textContent = 'Мы не смогли найти такой страницы :(';
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 1500);
    }
}
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', () => {
        // Переключаем видимость меню
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
            dropdownMenu.style.opacity = '0'; // Скрываем меню с анимацией
        } else {
            dropdownMenu.style.display = 'block';
            setTimeout(() => {
                dropdownMenu.style.opacity = '1'; // Плавное появление
            }, 10); // Небольшая задержка для плавного перехода
        }
    });

    // Закрытие меню при клике вне его
    window.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
            dropdownMenu.style.opacity = '0'; // Скрываем меню с анимацией
        }
    });
});
function openChat() {
    document.getElementById('chatContainer').style.display = 'block';
    document.getElementById('chatInput').focus();
}

function closeChat() {
    document.getElementById('chatContainer').style.display = 'none';
}

document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const message = this.value.trim();
        if (message) {
            addMessage(message, 'user');
            this.value = '';
            setTimeout(() => {
                addMessage('Ваша заявка отправлена на рассмотрение!', 'system');
            }, Math.random() * 2000 + 1000);
        }
    }
});

function addMessage(text, type) {
    const container = document.getElementById('chatMessages');
    const message = document.createElement('div');
    message.className = `chat-message ${type}-message`;
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы
  const userSwitchLinks = document.querySelectorAll('.user-switch a, .language-switch a');
    const modal = document.getElementById('registration-modal');
    const modalClose = modal.querySelector('.modal-close');
    
    // Обработчик для ссылок в user-switch
    userSwitchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем переход по ссылке
            showModal();
        });
    });
    
    // Обработчик для закрытия модального окна
    modalClose.addEventListener('click', () => {
        closeModal();
    });
    
    // Закрытие при клике вне содержимого модального окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Функция для показа модального окна
    function showModal() {
        modal.classList.add('show');
        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
            modal.querySelector('.modal-content').style.opacity = '1';
        }, 10);
    }
    
    // Функция для закрытия модального окна
    function closeModal() {
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        modal.querySelector('.modal-content').style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('show');
        }, 300);
    }
});

