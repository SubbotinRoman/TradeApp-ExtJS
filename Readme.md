# TradeApp-ExtJS

## Обзор 🌟

Приложение для управления товарами, разработанное на ExtJS 6.0.0. Включает в себя систему авторизации, табличное представление товаров с возможностью поиска и сортировки, а также детальные карточки товаров с функционалом редактирования. Интерфейс построен с использованием компонентов ExtJS, обеспечивающих единый стиль оформления и удобство использования.

### [Посмотреть демо](ссылка_на_демо) 👈

<img alt="TradeApp preview" src="resources/img/preview-1.png">
<img alt="TradeApp preview" src="resources/img/preview-2.png">
<img alt="TradeApp preview" src="resources/img/preview-3.png">


---

## Технологии ⚙️

![ExtJS](https://img.shields.io/badge/ExtJS-%2395C93D.svg?style=for-the-badge&logo=sencha&logoColor=white)
![Sencha CMD](https://img.shields.io/badge/Sencha_CMD-%2395C93D.svg?style=for-the-badge&logo=sencha&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

---

## Функционал 🚀

- 🔐 Форма авторизации с валидацией логина и пароля
- 📋 Таблица товаров с возможностью сортировки по колонкам
- 🔍 Поиск товаров:
  - По ID товара
  - По названию товара
- 📝 Карточка товара с возможностью:
  - Просмотра детальной информации
  - Редактирования данных
  - Сохранения изменений
- ↩️ Возможность выхода из системы

---

## Как запустить локально

1. [Установите Sencha CMD](https://www.sencha.com/products/sencha-cmd/) (если еще не установлен)
   - Скачайте Sencha CMD с официального сайта Sencha
   - Следуйте инструкциям установщика

2. [Установите ExtJS SDK](https://www.sencha.com/products/extjs/evaluate/) (если еще не установлен)
   - Скачайте ExtJS SDK с официального сайта Sencha
   - Распакуйте в удобное место на вашем компьютере

3. Настройка проекта
```bash
# Перейдите в директорию проекта
cd TradeApp-ExtJS

# Обновите зависимости проекта
sencha app refresh

# Соберите проект
sencha app build development

# Запустите локальный сервер
sencha app watch
```

После запуска откройте браузер и перейдите по адресу `http://localhost:1841/`