<!-- Небольшой скрипт для взаимодействия с меню -->

    document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки меню
    const menuLinks = document.querySelectorAll('.menu-link');

    // Обработчик клика по пунктам меню
    menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();

    // Удаляем активный класс у всех ссылок
    menuLinks.forEach(item => {
    item.classList.remove('active');
    // Удаляем индикатор активного пункта
    const parent = item.parentElement;
    const indicator = parent.querySelector('.active-indicator');
    if (indicator) {
    indicator.style.display = 'none';
}
});

    // Добавляем активный класс к текущей ссылке
    this.classList.add('active');

    // Показываем индикатор активного пункта
    const parent = this.parentElement;
    let indicator = parent.querySelector('.active-indicator');

    if (!indicator) {
    indicator = document.createElement('div');
    indicator.className = 'active-indicator';
    parent.appendChild(indicator);
}

    indicator.style.display = 'block';

    // Анимация для плавного появления индикатора
    indicator.style.opacity = '0';
    indicator.style.transform = 'scaleX(0.8)';

    setTimeout(() => {
    indicator.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    indicator.style.opacity = '1';
    indicator.style.transform = 'scaleX(1)';
}, 10);
});
});

    // Добавляем эффект при наведении на иконки соцсетей
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

    icon.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
});
});
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для кнопки
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function() {
        // Анимация нажатия
        this.style.transform = 'scale(0.95)';

        setTimeout(() => {
            this.style.transform = 'scale(1)';
            alert('Форма расчета стоимости будет открыта здесь');
        }, 150);
    });

    // Добавляем небольшую анимацию для преимуществ при загрузке
    const features = document.querySelectorAll('.feature');

    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateX(0)';
        }, 200 + index * 100);
    });

    // Анимация для заголовка
    const title = document.querySelector('.main-title');
    const subtitle = document.querySelector('.subtitle');

    title.style.opacity = '0';
    subtitle.style.opacity = '0';

    setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease';
        title.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease';
        subtitle.style.opacity = '1';
    }, 400);
});
