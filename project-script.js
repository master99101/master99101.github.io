document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление текста при скролле
    const sections = document.querySelectorAll('.content-section');
    
    // Функция для проверки, виден ли элемент в области просмотра
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Функция для обработки скролла
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Первоначальная проверка для элементов, которые уже видны
    handleScroll();
    
    // Обработчик события скролла
    window.addEventListener('scroll', handleScroll);
    
    // Плавный скролл к разделам при клике на ссылки в содержании
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Анимация для ссылки
                link.classList.add('active');
                
                // Удаление активного класса с других ссылок
                tocLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.classList.remove('active');
                    }
                });
                
                // Плавный скролл к разделу
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Обновление URL с хэшем
                window.history.pushState(null, null, targetId);
            }
        });
    });
    
    // Определение активного раздела при скролле
    function setActiveSection() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const id = section.getAttribute('id');
                
                // Установка активной ссылки в содержании
                tocLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveSection);
    
    // Дополнительная анимация для плавающего логотипа
    const floatingLogo = document.querySelector('.floating-logo');
    
    document.addEventListener('mousemove', (e) => {
        // Небольшой эффект паралакса для логотипа
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        floatingLogo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Возвращение к исходному состоянию при уходе курсора
    document.addEventListener('mouseleave', () => {
        floatingLogo.style.transform = 'translate(0, 0)';
    });


});
