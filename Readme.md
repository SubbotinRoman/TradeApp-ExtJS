# TradeApp-ExtJS (JavaScript / ExtJS)

## Обзор 🌟

Приложение для управления товарами, разработанное на ExtJS. Включает в себя систему авторизации, табличное представление товаров с возможностью поиска и сортировки, а также детальные карточки товаров с функционалом редактирования. Интерфейс построен с использованием компонентов ExtJS, обеспечивающих единый стиль оформления и удобство использования.

### [Посмотреть демо](https://subbotinroman.github.io/TradeApp-ExtJS/) 👈

<img alt="TradeApp preview" src="resources/img/preview-1.png">
<img alt="TradeApp preview" src="resources/img/preview-2.png">
<img alt="TradeApp preview" src="resources/img/preview-3.png">


---

## Стек технологий ⚙️

![ExtJS](https://img.shields.io/badge/ExtJS-%2395C93D.svg?style=for-the-badge&logo=sencha&logoColor=white)
![Sencha CMD](https://img.shields.io/badge/Sencha_CMD-%2395C93D.svg?style=for-the-badge&logo=sencha&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

---

## Возможности 🚀

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

## Как запустить локально 💻

1. Склонируйте репозиторий
   ```bash
   git clone https://github.com/SubbotinRoman/TradeApp-ExtJS.git
   ```

2. [Установите Sencha CMD](https://www.sencha.com/products/sencha-cmd/) (если еще не установлен)
   - Скачайте Sencha CMD с официального сайта Sencha
   - Следуйте инструкциям установщика

3. [Установите ExtJS SDK](https://www.sencha.com/products/extjs/evaluate/) (если еще не установлен)
   - Скачайте ExtJS SDK с официального сайта Sencha
   - Распакуйте в удобное место на вашем компьютере

4. Настройка проекта
```bash
# Перейдите в директорию проекта
cd TradeApp-ExtJS

# Установите зависимости через npm
npm install

# Обновите зависимости проекта и пути к SDK
sencha app upgrade

# Запустите локальный сервер разработки
sencha app watch
```

После запуска откройте браузер и перейдите по адресу `http://localhost:1841/`

---

